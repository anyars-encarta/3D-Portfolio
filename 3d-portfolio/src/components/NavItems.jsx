import { navLinks } from '../constants'

const NavItems = ({ toggleMenu }) => {
    const handleScroll = (href) => {
        window.scrollTo(0, document.querySelector(href).offsetTop);
        toggleMenu();
    };
    
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, name, href }) => (
                <li key={id} className='nav-li' onClick={() => handleScroll(href)}>
                    <a href={href} className='nav-li_a'>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavItems