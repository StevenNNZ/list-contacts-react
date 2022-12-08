import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../pure/contact';

const ContactList = ({ contacts, change, remove }) => {

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact, i) => {
                            return (
                                <Contact
                                    key={i}
                                    contact={contact}
                                    change={change}
                                    remove={remove} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactList;
