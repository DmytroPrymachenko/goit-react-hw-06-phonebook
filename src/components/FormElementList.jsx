import React from 'react';
import {
  DeleteBtn,
  ElementDiv,
  ElementUl,
} from './StylesJSX/FormElementListStyles';
import { ElementsLi } from './StylesJSX/ElementStyles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlise';

export const FormElementList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContact(id));
  }
  function filteredContacts() {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <ElementDiv>
      <ElementUl>
        {filteredContacts().map(el => (
          <ElementsLi key={crypto.randomUUID()}>
            <p>
              {el.name}: {el.number}
            </p>
            <DeleteBtn
              onClick={() => {
                handleDelete(el.id);
              }}
              type="button"
            >
              DELETE
            </DeleteBtn>
          </ElementsLi>
        ))}
      </ElementUl>
    </ElementDiv>
  );
};
