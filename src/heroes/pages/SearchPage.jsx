import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../../shared";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { search, onInputChange, onResetForm } = useForm({ search: "" });

  const handleSearch = (event) => {
    event.preventDefault();

    const findSearch = search.trim().toLowerCase();

    navigate(`?q=${findSearch}`);

    onResetForm();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              name="search"
              autoComplete="off"
              value={search}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>
            Results: <span className="fw-bold">{heroes.length}</span>
          </h4>
          <hr />

          <div className="alert alert-primary">Search a Hero</div>

          <div className="alert alert-danger">
            No Results with <span className="fw-bold">{q}</span>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
