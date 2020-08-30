import React from 'react';
import useForm from '@hooks/useForm';
import { AppSubmitEvent } from '@typings/htmlEvents';

const SearchScreen = (): JSX.Element => {
  const { formData, handleChange, reset } = useForm({ searchText: '' });
  const { searchText: searchValue } = formData;
  const handleSubmit = (e: AppSubmitEvent) => {
    e.preventDefault();
    reset();
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
                name="searchText"
                autoComplete="off"
                value={searchValue}
                onChange={handleChange}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
