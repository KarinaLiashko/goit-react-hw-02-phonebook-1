import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, InputText, Button } from './ContactsList.styled';

const ContactsList = ({ contacts, onContactDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <InputText>{name}</InputText>
        <InputText>{number}</InputText>
        <Button type="button" onClick={() => onContactDelete(id)}>
          Delete
        </Button>
      </ListItem>
    ))}
  </List>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};