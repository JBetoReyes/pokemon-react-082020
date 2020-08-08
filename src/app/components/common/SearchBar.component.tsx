import React, { useState, Validator } from 'react';
import PropTypes from 'prop-types';
import './_SearchBar.component.scss';

export type OwnProps = {
  title: string;
  setPokemons: React.Dispatch<React.SetStateAction<string[]>>;
};

type Props = {
  propTypes: Record<string, Validator<any>> & OwnProps;
};
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

const SearchBar = ({ title, setPokemons }: OwnProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInput = (event: ChangeEvent) => {
    if (event.target.value.trim().length > 2) {
      setSearchValue(event.target.value.trim());
    }
  };

  const handelSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setPokemons((pokemons: string[]) => {
      return [...pokemons, searchValue];
    });
    setSearchValue('');
  };

  return (
    <div className="search-bar__container">
      <h2 className="search-bar__title">{title}</h2>
      <form className="search-bar__form" onSubmit={handelSubmit}>
        <input
          className="search-bar__input"
          type="text"
          value={searchValue}
          onChange={handleSearchInput}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  setPokemons: PropTypes.func.isRequired,
};

export default SearchBar;
