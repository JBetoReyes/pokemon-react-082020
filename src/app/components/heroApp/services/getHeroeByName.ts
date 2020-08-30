import heroes, { IHero } from '../data/heroes';

const getHeroeByName = (name: string): IHero[] => {
  return heroes.filter(
    (heroe) =>
      heroe.superhero.toLowerCase().includes(name) ||
      heroe.alter_ego.toLowerCase().includes(name)
  );
};

export default getHeroeByName;
