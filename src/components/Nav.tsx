import { useState } from 'react'
import './Nav.css'

function Nav() {
    const [showBar, setShowBar] = useState(false)
    const handleShowBar = () => {
        setShowBar(!showBar)
    }

    return (
        <div className={`Navbar ${showBar ? "showNav" : "hidenav"}`}>
            <ul className="NavbarLinks">
                <li className="NavbarItem">
                    <button className="NavbarLink">
                        Léo-Paul
                    </button>
                </li>
                <li className="NavbarItem">
                    <button className="NavbarLink">
                        Skills
                    </button>
                </li>

                <li className="NavbarItem">
                    <button className="NavbarLink">
                        Experiences
                    </button>
                </li>

                <li className="NavbarItem">
                    <button className="NavbarLink">
                        More about me
                    </button>
                </li>

                <li className="NavbarItem">
                    <button className="NavbarLink">
                        Contact
                    </button>
                </li>
            </ul>
            <button className='NavbarBurger' onClick={handleShowBar}>
                <span className='BurgerBar'></span>
            </button>
        </div>
    )
}

export default Nav