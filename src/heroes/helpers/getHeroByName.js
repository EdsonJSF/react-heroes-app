import { heroes } from "../data/heros";

export const getHeroByName = (name = "") => {
  name = name.trim().toLowerCase();

  if (!name.length) return heroes;

  return heroes.filter((hero) => {
    if (
      hero.characters.toLowerCase().includes(name) ||
      hero.alter_ego.toLowerCase().includes(name) ||
      hero.superhero.toLowerCase().includes(name)
    ) {
      return hero;
    }
  });
};
