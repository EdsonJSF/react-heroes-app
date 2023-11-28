import PropTypes from "prop-types";

import { getHeroesByPublisher } from "../helpers";
import { HeroesListItem } from ".";

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <HeroesListItem key={hero.id} hero={hero} />
      ))}
    </ul>
  );
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
