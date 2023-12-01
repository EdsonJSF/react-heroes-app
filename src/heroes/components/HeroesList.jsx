import { useMemo } from "react";
import PropTypes from "prop-types";

import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from ".";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
