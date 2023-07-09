import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import  InputSection    from 'components/InputSection';
import  ContactsList    from 'components/ContactsList';
import  Filter    from 'components/Filter';
import { Container} from './App.styled';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38-099-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38-095-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38-073-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38-067-227-91-26' },
    ],
    filter: '',
  };

  changeFilter = event => {

    this.setState({ filter: event.currentTarget.value });
  }

  onFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFormSubmit = values => {
    const { contacts } = this.state;
    const { name, number } = values;
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
    
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  }
};
  
  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };


  render() {
    const { filter } = this.state;
    const visibleContacts = this.onFilteredContacts();
      return (
        <Container>
          {/* <PhonebookTitle>Phonebook</PhonebookTitle> */}
          <InputSection onSubmit={this.handleFormSubmit} />

          {/* <ContactsTitle>Contacts</ContactsTitle> */}
          {/* <FilterSubtitle>Find contacts by name</FilterSubtitle> */}
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onContactDelete={this.onContactDelete}
          />
        </Container>
      );
    };
  }
