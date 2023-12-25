import React, { Component } from 'react';

import {
  DeleteBtn,
  ElementDiv,
  ElementUl,
} from './StylesJSX/FormElementListStyles';
import { ElementsLi } from './StylesJSX/ElementStyles';

export default class FormElementList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ElementDiv>
        <ElementUl>
          {contacts.map(({ number, name, id }) => (
            <ElementsLi key={id}>
              <p>{number}</p>
              <p>{name}</p>
              <DeleteBtn onClick={() => this.props.onDelete(id)}>
                Delate
              </DeleteBtn>
            </ElementsLi>
          ))}
        </ElementUl>
      </ElementDiv>
    );
  }
}
