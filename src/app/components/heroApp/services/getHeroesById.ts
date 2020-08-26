import heroes, { IHero } from '../data/heroes';

const getHeroesById = (id: string): IHero | undefined => {
  return heroes.find((heroe) => heroe.id === id);
};

export default getHeroesById;
