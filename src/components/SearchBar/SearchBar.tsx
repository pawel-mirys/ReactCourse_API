/* eslint-disable @typescript-eslint/no-unused-vars */
import './SearchBar.css';

import { useState } from 'react';

type SearchBarProps = {
  onSubmit: (term: string) => void;
};

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => (prev = e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue((prev) => (prev = ''));
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          placeholder='Search photos'
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
