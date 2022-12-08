import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Contac from '../../models/Contact.class';


const FormContact = ({ add }) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');



    const addContact = e => {
        e.preventDefault();

        const dataUser = new Contac(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        )

        console.log(dataUser)

        add(dataUser);
    }

    return (
        <div className='container-sm pt-5' style={{ maxWidth: '600px' }}>
            <div className='card'>

                <div className='card-body'>
                    <form onSubmit={addContact}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input ref={nameRef} type="text" className="form-control" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name:</label>
                            <input ref={lastnameRef} type="text" className="form-control" id="lastname" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input ref={emailRef} type="email" className="form-control" id="email" required />
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


FormContact.propTypes = {
    add: PropTypes.func.isRequired
};


export default FormContact;
