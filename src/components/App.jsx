import React, { Component } from "react";
import { nanoid } from "nanoid";

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './App.styled';

// const LS_KEY = 'contact_item_index';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    name: '',
    filter: '',
  }
  
  // додавання контакту
  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    
    const { contacts } = this.state;
    contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
      ? alert(
        `${newContact.name} is already in the contact list`
      )
      : this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
  };

  // функція зміни стану фільтру
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // фільтрує і повертає результат
  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  // видалення контакту
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // локал сторидж
  componentDidMount() {
    console.log(localStorage.getItem('contacts'));
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

  }

  render() {
   const { filter } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filtredContacts = this.filtredContacts();
    const deleteContact = this.deleteContact;
    const length = this.state.contacts.length;

    return (
  <div>
      <h1>Phonebook</h1>
       <ContactForm  onSubmit={addContact}/>

      <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={changeFilter} />
      {/*рендер або сповіщення в разі порожнього списку контактів  */}
        {length > 0 ? (
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={deleteContact}
          />
        ) : (
            <Message>Contact list is empty</Message>
        )}
        
    </div>
)
  };
}; 

  