import { useState } from 'react';
import {
  ButtonType,
  FormsDiv,
  InputName,
  InputPhone,
  LabelName,
  LabelPhone,
} from './StylesJSX/FormStyles';

export const Form = ({ contactsState }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const onChangeState = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    contactsState({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <FormsDiv onSubmit={onSubmitForm}>
      <LabelName htmlFor="name">Name</LabelName>
      <InputName
        onChange={onChangeState}
        id="name"
        name="name"
        type="text"
        value={name}
      />
      <LabelPhone htmlFor="phone">Phone</LabelPhone>
      <InputPhone
        onChange={onChangeState}
        id="phone"
        name="number"
        type="tel"
        value={number}
      />
      <ButtonType type="submit">BUTTON</ButtonType>
    </FormsDiv>
  );
};
