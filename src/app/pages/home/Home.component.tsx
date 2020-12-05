import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import SearchBar from '@components/common/SearchBar.component';
import Card from '@components/common/Card.component';
import { usePageRefresher } from '@hooks/usePageRefresher';
import Carousel from '@components/common/Carousel.component';
import { loadMainCarousel } from '../../store/actions/carouselActions';
import { IStoreState } from '../../models/storeModel';

const mapState = (state: IStoreState) => ({
  exploreCarousel: state.exploreCarousel,
  myListCarousel: state.myListCarousel,
  searchResultsCarousel: state.searchResultsCarousel
});

const mapDispatch = {
  loadMainCarousel,
};

const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {mainCarousel: {isLoading: boolean, pokemons: []}, loadMainCarousel: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

export const Home = (props: PropsFromRedux): JSX.Element => {
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
              searchResultsCarousel.pokemons.map(({ name, number }) => {
                return (
                  <Card
                    key={`${number}-${name}`}
                    name={name}
                    number={number}
                    detail={name}
                    detailLabel="Name"
                    subDetail={`${number}`}
                    subDetailLabel="Pokemon Number"
                    url={`${pokemonsImageUrl}/${number}.png`}
                    ref={null}
                    addAction
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
              myListCarousel.pokemons.map(({ name, number }) => {
                return (
                  <Card
                    key={`${number}-${name}`}
                    name={name}
                    number={number}
                    detail={name}
                    detailLabel="Name"
                    subDetail={`${number}`}
                    subDetailLabel="Pokemon Number"
                    url={`${pokemonsImageUrl}/${number}.png`}
                    ref={null}
                    deleteAction
                  />
                );
              })
            }
        </Carousel>
        : null
      }
      <Carousel carouselName="exploreCarousel" title="Explore">
        {pokemons.map(({ name, number }, index) => {
          const cardRefIndex = pokemons.length - 6;
          return (
            <Card
              key={`${number}-${name}`}
              name={name}
              number={number}
              detail={name}
              detailLabel="Name"
              subDetail={`${number}`}
              subDetailLabel="Pokemon Number"
              url={`${pokemonsImageUrl}/${number}.png`}
              ref={index === cardRefIndex ? itemRef : null}
              addAction
            />
          );
        })}
      </Carousel>
    </section>
  );
};

export default connector(Home);
