import React, { useState } from 'react';
import './searchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Введите город"
      />
      <button className="search-bar__button" type="submit">
        Поиск
      </button>
    </form>
  );
};

export default SearchBar;
