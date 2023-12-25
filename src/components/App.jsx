import { nanoid } from 'nanoid';
import { Form } from './Form';
import FormElementList from './FormElementList';
import { useEffect, useState } from 'react';
import { FormDiv, FormElementDiv } from './StylesJSX/FormElementListStyles';
import Search from './Search';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(loadToLS('CONTACTS'));
  }, []);

  useEffect(() => {
    saveToLS('CONTACTS', contacts);
  }, [contacts]);

  // LS
  const saveToLS = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadToLS = key => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      console.log(error.message);
      return localStorage.getItem(key);
    }
  };
  // Ls

  const handleDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeSearch = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsState = contact => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    if (
      contacts.some(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  return (
    <FormDiv
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <FormElementDiv>
        <Form contactsState={contactsState} />
        <Search onSearch={onChangeSearch} valueSearch={filter} />
        <FormElementList contacts={filterContacts()} onDelete={handleDelete} />
      </FormElementDiv>
    </FormDiv>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   contactsState = contact => {
//     const newContact = {
//       ...contact,
//       id: nanoid(),
//     };
//     if (
//       this.state.contacts.some(
//         el => el.name.toLowerCase() === contact.name.toLowerCase()
//       )
//     ) {
//       alert(`${contact.name} is already in contacts`);
//     } else {
//       this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
//     }
//   };

//   handleDelete = contactId => {
//     console.log(contactId);
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   onChangeSearch = e => {
//     this.setState({ filter: e.target.value });
//   };
//   filterContacts = () => {
//     return this.state.contacts.filter(el =>
//       el.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   componentDidMount() {
//     this.setState({ contacts: this.loadToLS('CONTACTS') });
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       this.saveToLS('CONTACTS', this.state.contacts);
//     }
//   }

//   // LOCALSTORAGE

//   saveToLS(key, value) {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   loadToLS(key) {
//     try {
//       return JSON.parse(localStorage.getItem(key)) || [];
//     } catch (error) {
//       console.log(error.message);
//       return localStorage.getItem(key);
//     }
//   }

//   render() {
//     console.log(this.state.contacts);
//     return (
//       <FormDiv
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 18,
//           color: '#010101',
//         }}
//       >
//         <FormElementDiv>
//           <Form contactsState={this.contactsState} />
//           <Search
//             onSearch={this.onChangeSearch}
//             valueSearch={this.state.filter}
//           />
//           <FormElementList
//             contacts={this.filterContacts()}
//             onDelete={this.handleDelete}
//             // onFiltered={this.filterContacts}
//           />
//         </FormElementDiv>
//       </FormDiv>
//     );
//   }
// }
