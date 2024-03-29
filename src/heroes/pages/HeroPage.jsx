import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/" />;

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__slideInLeft">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8 animate__animated">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold">Alter ego: </span>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Publisher: </span>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">First Appearance: </span>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-success" onClick={handleGoBack}>
          Go back
        </button>
      </div>
    </div>
  );
};
