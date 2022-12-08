import React from 'react';
import PropTypes from 'prop-types';
import Contac from '../../models/Contact.class';


const Contact = ({ contact, change, remove }) => {

    const buttonStatus = () => {
        if (contact.status) {
            return (<button onClick={() => change(contact)} className='btn btn-primary'><i className='bi bi-eye-fill'></i> Online</button>)
        } else {
            return (<button onClick={() => change(contact)} className='btn btn-secondary'><i className='bi bi-eye-fill'></i> Offline</button>)
        }
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
            <td>{buttonStatus()}</td>
            <td>
                <button onClick={() => remove(contact)} className='btn btn-danger'><i className="bi bi-x-circle-fill"> Delete</i></button>
            </td>
        </tr>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(Contac).isRequired,
    change: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default Contact;
