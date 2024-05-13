import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard, SearchAlert } from "../components";
import { useForm } from "../../shared";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSearch = {
    show: !q.length,
    info: {
      classStyle: "primary",
      message: "Search a Hero",
      boldMessage: "",
    },
  };
  const showError = {
    show: q.length > 0 && !heroes.length,
    info: {
      classStyle: "danger",
      message: "No Results with",
      boldMessage: q,
    },
  };

  const { search, onInputChange } = useForm({ search: q });

  const handleSearch = (event) => {
    event.preventDefault();

    const findSearch = search.trim().toLowerCase();

    onInputChange({target: {name: "search", value: findSearch}})

    navigate(`?q=${findSearch}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-12 col-md-5">
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

        <div className="col-12 col-md-7">
          <h4>
            Results: <span className="fw-bold">{heroes.length}</span>
          </h4>
          <hr />

          {showSearch.show && <SearchAlert {...showSearch.info} />}
          {showError.show && <SearchAlert {...showError.info} />}

          {heroes.map((hero) => (
            <>
              <HeroCard key={hero.id} hero={hero} />
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
