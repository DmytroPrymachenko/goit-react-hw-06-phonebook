import React, { Component } from 'react';
import { InputSearch, LabelSearch } from './StylesJSX/FormStyles';

export default class Search extends Component {
  render() {
    return (
      <div>
        <LabelSearch htmlFor="search">Find contact:</LabelSearch>
        <InputSearch
          onChange={this.props.onSearch}
          id="search"
          name="search"
          type="text"
          value={this.props.valueSearch}
        />
      </div>
    );
  }
}
