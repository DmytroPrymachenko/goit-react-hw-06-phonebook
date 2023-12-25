import React from 'react';
import { InputSearch, LabelSearch } from './StylesJSX/FormStyles';
import { useDispatch } from 'react-redux';
import { searchContact } from 'store/contactsSlise';

const Search = () => {
  const dispatch = useDispatch();

  function handleChange({ target: { value } }) {
    dispatch(searchContact(value));
  }
  return (
    <div>
      <LabelSearch htmlFor="search">Find contact:</LabelSearch>
      <InputSearch onChange={handleChange} type="text" id="search" />
    </div>
  );
};
export default Search;
