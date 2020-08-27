import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="fixed-top d-flex bd-highlight navbar navbar-expand-lg navbar-light bg-primary">
                <a className="p-2 flex-grow-1 bd-highlight navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="p-2 bd-highlight collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="font-weight-bold text-white nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="font-weight-bold text-white nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="font-weight-bold text-white nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="font-weight-bold text-white nav-link" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;