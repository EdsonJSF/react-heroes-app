import PropTypes from "prop-types";

export const HeroesListItem = ({hero}) => {
  return (
    <li>{hero.superhero}</li>
  )
}

HeroesListItem.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
  }).isRequired,
};