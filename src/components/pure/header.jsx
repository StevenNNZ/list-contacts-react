import React from 'react';
import PropTypes from 'prop-types'

const Header = ({ view, change }) => {

    const navigate = (e, condition) => {
        e.preventDefault();

        // Cambiar el estado del view
        change(condition);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand bg-black text-white p-2 rounded-pill" href="index.html">Contact List</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a onClick={e => navigate(e, true)} className={`nav-link ${view && "active"}`} aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => navigate(e, false)} className={`nav-link ${!view && "active"}`} href="index.html">Create contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Header.propTypes = {
    view: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired
}
export default Header;
