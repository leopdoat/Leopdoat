import { useState } from 'react'
import './Nav.css'
import Logo from './Logo'

function Nav() {
    const [showBar, setShowBar] = useState(false)
    const handleShowBar = () => {
        setShowBar(!showBar)
    }

    return (
        <div className={`Navbar ${showBar ? "showNav" : "hidenav"}`}>
            <Logo />
            <ul className="NavbarLinks">
                <li className="NavbarItem">
                    <a href="/Leopdoat/" className="NavbarLink">
                        Léo-Paul
                    </a>
                </li>
                <li className="NavbarItem">
                    <a href="/Leopdoat/skills" className="NavbarLink">
                        Skills
                    </a>
                </li>

                <li className="NavbarItem">
                    <a href="/Leopdoat/experiences" className="NavbarLink">
                        Experiences
                    </a>
                </li>

                <li className="NavbarItem">
                    <a href="/Leopdoat/more-about-me" className="NavbarLink">
                        More about me
                    </a>
                </li>

                <li className="NavbarItem">
                    <a href="/Leopdoat/contact" className="NavbarLink">
                        Contact
                    </a>
                </li>
            </ul>
            <button className='NavbarBurger' onClick={handleShowBar}>
                <span className='BurgerBar'></span>
            </button>
        </div>
    )
}

export default Nav