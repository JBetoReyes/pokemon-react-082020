import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import SearchBar from '@components/common/SearchBar.component';
import Card from '@components/common/Card.component';
import { usePageRefresher } from '@hooks/usePageRefresher';
import Carousel from '@components/common/Carousel.component';
import { loadMainCarousel } from '../../store/actions/carouselActions';
import { IStoreState } from '../../models/storeModel';

const mapState = (state: IStoreState) => ({
  mainCarousel: state.mainCarousel,
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
    mainCarousel: { isloading, pokemons },
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
  return (
    <section>
      <SearchBar title="Which is your favorite pokemon?" />
      <Carousel carouselName="mainCarousel" title="Explore">
        {pokemons.map(({ name, number }, index) => {
          const cardRefIndex = pokemons.length - 6;
          return (
            <Card
              key={`${number}-${name}`}
              detail={name}
              detailLabel="Name"
              subDetail={`${number}`}
              subDetailLabel="Pokemon Number"
              url={`${pokemonsImageUrl}/${number}.png`}
              ref={index === cardRefIndex ? itemRef : null}
            />
          );
        })}
      </Carousel>
    </section>
  );
};

export default connector(Home);
