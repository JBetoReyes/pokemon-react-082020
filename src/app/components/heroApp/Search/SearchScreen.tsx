import React, { useMemo, useState } from 'react';
import useForm from '@hooks/useForm';
import { AppSubmitEvent, AppChangeEvent } from '@typings/htmlEvents';
import { useLocation, RouteComponentProps } from 'react-router-dom';
import { parse } from 'query-string';
import getHeroeByName from '../services/getHeroeByName';
import HeroCard from '../heroes/HeroCard';

export type Props = RouteComponentProps;

const SearchScreen = ({ history }: Props): JSX.Element => {
  const [searchTriggered, setSearchState] = useState(false);
  const { search } = useLocation();
  const { q = '' } = parse(search);
  const { formData, handleChange } = useForm({ query: `${q}` });
  const { query } = formData;
  const heroesFiltered = getHeroeByName(q as string);
  const handleSearchChange = (e: AppChangeEvent) => {
    setSearchState(false);
    handleChange(e);
  };
  const handleSubmit = (e: AppSubmitEvent) => {
    setSearchState(true);
    e.preventDefault();
    history.push(`?q=${query}`);
  };
  return (
    <div>
      <div className="container-fuid">
        <h1 className="pl-5">Search SearchScreen</h1>
        <hr />
        <div className="row pl-5">
          <div className="col-4">
            <h4>Search Form</h4>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Find your hero"
                className="form-control"
                name="query"
                autoComplete="off"
                value={query}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="btn btn-outline-primary btn-block mt-3"
              >
                Search...
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />
            {query === '' && heroesFiltered.length === 0 && (
              <div className="alert alert-info ml-3 mr-3">Search a heroe</div>
            )}
            {query !== '' && heroesFiltered.length === 0 && searchTriggered && (
              <div className="alert alert-danger ml-3 mr-3">
                {`Theres is no a hero with ${query}`}
              </div>
            )}
            {heroesFiltered.map((heroe) => (
              <div className="m-3">
                <HeroCard key={heroe.id} {...heroe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
