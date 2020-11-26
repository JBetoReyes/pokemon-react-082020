import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import SearchBar from '@components/common/SearchBar.component';
import { IStoreState } from '../../models/storeModel';
import { loadMainCarousel } from '../../store/actions/carouselActions';
import Carousel from '@components/common/Carousel.component';
import Card from '@components/common/Card.component';

const mapState = (state: IStoreState) => ({
  mainCarousel: state.mainCarousel
});

const mapDispatch = {
  loadMainCarousel
}

const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {mainCarousel: {isLoading: boolean, pokemons: []}, loadMainCarousel: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

export const Home = (props: PropsFromRedux): JSX.Element => {
  const { mainCarousel: {isloading, pokemons}} = props;
  const pokemonsImageUrl = process.env.POKEMON_IMAGES_URL;
  useEffect(() => {
    props.loadMainCarousel();
  }, []);
  const carousel = (
    <Carousel>
      {pokemons.map(({ name, number }) => (
        <Card
          key={`${number}-${name}`}
          detail={name}
          detailLabel="Name"
          subDetail={`${number}`}
          subDetailLabel="Pokemon Number"
          url={`${pokemonsImageUrl}/${number}.png`}
        />
      ))}
    </Carousel>
  );
  return (
    <section>
      <SearchBar title="Which is your favorite pokemon?" />
      {isloading ? 'loading' : carousel}
    </section>
  );
};

export default connector(Home);
