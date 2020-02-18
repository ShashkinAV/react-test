import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';

const Header = () => {

    return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <Logo />
                <Nav/>
                <Button />
            </div>
    );
}

export default Header;