import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav className="my-2 my-md-0 mr-md-3">
            <NavLink className="p-2" activeClassName='activeLink' to='/home'>Home</NavLink>
            <NavLink className="p-2" activeClassName='activeLink'to='/about'>About</NavLink>
            <NavLink className="p-2" activeClassName='activeLink' to='/pricing'>Pricing</NavLink>
            <NavLink className="p-2" activeClassName='activeLink'to='/contacts'>Contacts</NavLink>
        </nav>
    );
}

export default Nav;