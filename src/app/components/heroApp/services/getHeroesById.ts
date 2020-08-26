import heroes, { IHero } from '../data/heroes';

const getHeroesById = (id: string): IHero[] => {
  return heroes.filter((heroe) => heroe.id === id);
};

export default getHeroesById;
