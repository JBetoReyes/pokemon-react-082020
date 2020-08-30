import heroes, { IHero } from '../data/heroes';

const getHeroeByName = (name: string): IHero[] => {
  if (name === '') {
    return [];
  }
  return heroes.filter(
    (heroe) =>
      heroe.superhero.toLowerCase().includes(name.toLowerCase()) ||
      heroe.alter_ego.toLowerCase().includes(name.toLowerCase())
  );
};

export default getHeroeByName;
