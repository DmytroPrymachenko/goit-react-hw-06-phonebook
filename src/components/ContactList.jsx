import React from 'react';
import {
  DeleteBtn,
  ElementDiv,
  ElementUl,
} from './StylesJSX/FormElementListStyles';
import { ElementsLi } from './StylesJSX/ElementStyles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlise';
import { selectContacts, selectFilter } from 'store/selector';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
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
          <ElementsLi key={el.id}>
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
