import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { MainTitle } from "./ContactForm/ContactForm.styled";
import { Title } from "./ContactList/ContactList.styled";

export class App extends Component
  {
    state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  
    componentDidMount() {
      const savedContacts = localStorage.getItem('contacts');
  
      if (savedContacts) {
        this.setState({ contacts: JSON.parse(savedContacts) });
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    }
  
    addContact = newContact => {
      const { contacts } = this.state;
      const oldContact = contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
  
      if (!oldContact) {
        this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
        }));
      } else {
        alert(`${newContact.name} is already in contacts.`);
      }
    };
  
    deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };
  
    onChangeFilter = newFilter => {
      this.setState({
        filter: newFilter,
      });
    };
  
    render() {
      const searchContact = this.state.contacts.filter(cont =>
        cont.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
  
      return (
        <div>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onAdd={this.addContact} />
  
          <Title>Contacts</Title>
          <Filter filter={this.state.filter} onChangeFilter={this.onChangeFilter} />
          <ContactList items={searchContact} onDelete={this.deleteContact} />
        </div>
      );
    }
  }