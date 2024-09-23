import React from 'react'
import { navLinks } from '../constants'

const NavItems = ({ toggleMenu }) => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, name, href }) => (
                <li key={id} className='nav-li'>
                    <a href={href} className='nav-li_a' onClick={() => {
                        window.scrollTo(0, 0);
                        toggleMenu();
                    }}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavItems