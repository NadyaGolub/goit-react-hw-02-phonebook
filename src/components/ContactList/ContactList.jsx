import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDel, Item } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        {name}:{number}
        <ButtonDel type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ButtonDel>
      </Item>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
