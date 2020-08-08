import React from 'react';
import './_SearchBar.component.scss';

export type OwnProps = {
  title: string;
};

const SearchBar = ({ title }: OwnProps): JSX.Element => {
  return (
    <div className="search-bar__container">
      <h2 className="search-bar__title">{title}</h2>
      <input className="search-bar__input" type="text" />
    </div>
  );
};

export default SearchBar;
