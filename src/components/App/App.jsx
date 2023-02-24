import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name: name, number: number };
    this.state.contacts.find(contact => contact.name === name)
      ? alert(`${name} is alredy in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        });
  };

  handlerChangeFilter = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handlerChangeFilter} />
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
