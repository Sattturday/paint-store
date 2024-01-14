import { useState } from 'react';

import './SearchForm.scss';

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');

  function onSearch(e) {
    e.preventDefault();
    console.log(searchQuery);
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={onSearch}>
        <input
          className='search__input'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Искать товары'
        />
        <button className='search__submit' type='submit' />
      </form>
    </div>
  );
}
