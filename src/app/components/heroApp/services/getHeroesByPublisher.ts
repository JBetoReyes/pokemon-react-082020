import heroes, { IHero, PublisherType } from '../data/heroes';

const getHeroesByPubliser = (publisher: PublisherType): IHero[] => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validPublisher.includes(publisher)) {
    throw new Error('No Valid publisher');
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroesByPubliser;
