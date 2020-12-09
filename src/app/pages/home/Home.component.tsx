import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import SearchBar from '@components/common/SearchBar.component';
import cardFactory from '@components/common/Card.component';
import { usePageRefresher } from '@hooks/usePageRefresher';
import Carousel from '@components/common/Carousel.component';
import { addPokemonMyList, deletePokemonMyList, loadMainCarousel } from '../../store/actions/carouselActions';
import { IStoreState } from '../../models/storeModel';
import { IPokemon } from '../../models/pokemonModel';

const Card = cardFactory<IPokemon>();

const mapState = (state: IStoreState) => {
  return {
    exploreCarousel: state.exploreCarousel,
    myListCarousel: state.myListCarousel,
    searchResultsCarousel: state.searchResultsCarousel
  }
};

const mapDispatch = {
  addPokemonMyList,
  deletePokemonMyList,
  loadMainCarousel,
};

const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {mainCarousel: {isLoading: boolean, pokemons: []}, loadMainCarousel: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

const Home = (props: PropsFromRedux): JSX.Element => {
  const {
    exploreCarousel: { pokemons },
    myListCarousel,
    searchResultsCarousel
  } = props;
  const pokemonsImageUrl = process.env.POKEMON_IMAGES_URL;
  const initialPage = localStorage.getItem('page')
    ? +(localStorage.getItem('page') as string)
    : 1;
  const [page, setPage] = useState(initialPage);
  useEffect(() => {
    props.loadMainCarousel(page);
  }, [page]);
  const [itemRef] = usePageRefresher(setPage);
  const isMyListEmpty = myListCarousel.pokemons.length === 0;
  const addActionHandler = (pokemon: IPokemon) => {
    props.addPokemonMyList(pokemon);
  };
  const deleteActionHandler = (pokemon: IPokemon) => {
    props.deletePokemonMyList(pokemon.number);
  };
  const detailActionHandler = (pokemon: IPokemon, history: History) => {
    history.push(`/pokemon/${pokemon.number}`, {
      ...pokemon 
    });
  };
  const cardPokemonMapper = (pokemon: IPokemon) => {
    const { name, number } = pokemon;
    return {
      key: `${number}-${name}`,
      detail: name,
      detailLabel: "Name",
      subDetail: number,
      subDetailLabel: "Pokemon Number",
      url: `${pokemonsImageUrl}/${number}.png`,
      ref: null,
      data: pokemon
    };
  };
  return (
    <section>
      <SearchBar title="Which is your favorite pokemon?" />
      { isMyListEmpty
        ? (
            <div className="empty-list-placeholder">
              <img src="./assets/heart.png" alt="heart"/>
              <div className="">Add your favorite pokemons.</div>
            </div>
          )
        : null
      }
      { searchResultsCarousel.pokemons.length > 0
        ? <Carousel carouselName="exploreCarousel" title="Search Results">
            {
              searchResultsCarousel.pokemons.map((pokemon) => {
                return (
                  <Card
                    {...cardPokemonMapper(pokemon)}
                    addActionHandler={addActionHandler}
                    detailActionHandler={detailActionHandler}
                  />
                );
              })
            }
        </Carousel>
        : null
      }
      {
        !isMyListEmpty 
        ? <Carousel carouselName="exploreCarousel" title="My List">
            {
              myListCarousel.pokemons.map((pokemon) => {
                return (
                  <Card
                    {...cardPokemonMapper(pokemon)}
                    deleteActionHandler={deleteActionHandler}
                    detailActionHandler={detailActionHandler}
                  />
                );
              })
            }
        </Carousel>
        : null
      }
      <Carousel carouselName="exploreCarousel" title="Explore">
        {pokemons.map((pokemon, index) => {
          const cardRefIndex = pokemons.length - 10;
          return (
            <Card
              {...cardPokemonMapper(pokemon)}
              ref={index === cardRefIndex ? itemRef : null}
              addActionHandler={addActionHandler}
              detailActionHandler={detailActionHandler}
            />
          );
        })}
      </Carousel>
    </section>
  );
};

export default withRouter(connector(Home));
