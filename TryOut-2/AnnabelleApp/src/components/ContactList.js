import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ContactDetail from './ContactDetail';
import CustomData from '../contacts.json';

class ContactList extends Component {
  state = { contacts: [] };

  componentWillMount() {
    this.setState({ contacts: CustomData });
  }

  renderContacts() {
    return this.state.contacts.map(contact =>
      <ContactDetail key={contact.id} contact={contact} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderContacts()}
      </ScrollView>
    );
  }
}

export default ContactList;
