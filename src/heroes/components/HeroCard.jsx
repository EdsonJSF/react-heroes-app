import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  const heroImageUrl = `./assets/heroes/${hero.id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={hero.superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>

              {hero.characters !== hero.alter_ego && <p>{hero.characters}</p>}

              <div className="card-text">
                <small>{hero.first_appearance}</small>
              </div>

              <Link to={`/hero/${hero.id}`}>More..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
  }).isRequired,
};
