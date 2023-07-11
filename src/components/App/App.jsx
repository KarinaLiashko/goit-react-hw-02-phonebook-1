import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import  InputSection  from 'components/InputSection';
import  ContactsList  from 'components/ContactsList';
import  Filter from 'components/Filter';
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

  changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFormSubmit = ({ name, number }) => {
    const isNameExists = this.state.contacts.some(
      contact => contact.name === name
    );
    if (isNameExists) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), name, number }, ...contacts],
    }));
  };
  
  onContactDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };


  render() {
    const { filter } = this.state;
    const visibleContacts = this.onFilteredContacts();
      return (
        <Container>
          <InputSection onSubmit={this.handleFormSubmit} />
          {this.state.contacts.length > 0 && (
            <>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
          </>)}
         
          <ContactsList
            contacts={visibleContacts}
            onContactDelete={this.onContactDelete}
          />
        </Container>
      );
    };
  }
