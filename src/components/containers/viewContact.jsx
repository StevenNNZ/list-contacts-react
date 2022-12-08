import React, { useState } from 'react';
import ContactList from './contact-list';
import FormContact from '../forms/formContact';
import Header from '../pure/header';
import Contac from '../../models/Contact.class';


const ViewContact = () => {

    // Controller of the page view
    const [home, setHome] = useState(true);

    // Contacts data and methods
    const contact1 = new Contac('Steven', 'Núñez', 'stivenlabrador2002@gmail.com', false)
    const contact2 = new Contac('Nicol', 'Perez', 'nicol@gmail.com', false)
    const contact3 = new Contac('Alisson', 'Delgado', 'alisson@gmail.com', false)

    // Controller data contacts
    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    // Change view page method
    const changeView = show => setHome(show)

    // Change status contacts method
    const changeStatus = contact => {
        const id = contacts.indexOf(contact)
        const tempContacts = [...contacts];
        tempContacts[id].status = !tempContacts[id].status;

        setContacts(tempContacts)
    }

    // Remove contact method
    const removeContact = contact => {
        const id = contacts.indexOf(contact)
        const tempContacts = [...contacts];
        tempContacts.splice(id, 1)

        setContacts(tempContacts)
    }

    //Add contact
    const addContact = contact => {
        const tempContacts = [...contacts];
        tempContacts.push(contact)

        setContacts(tempContacts)
        setHome(true)
    }

    // Show components of the view
    const showView = () => {
        if (home) {
            return <ContactList contacts={contacts} change={changeStatus} remove={removeContact} />
        } else {
            return <FormContact add={addContact} />
        }
    }

    return (
        <div>
            <Header view={home} change={changeView} />
            {showView()}
        </div>
    );
};


export default ViewContact;
