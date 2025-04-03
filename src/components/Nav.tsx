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
                    <button className="NavbarLink" onClick={() => {
                        const element = document.getElementById('desc')
                        setShowBar(false)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
                        Léo-Paul
                    </button>
                </li>
                <li className="NavbarItem">
                    <button className="NavbarLink" onClick={() => {
                        const element = document.getElementById('separator')
                        setShowBar(false)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
                        Skills
                    </button>
                </li>
                <li className="NavbarItem">
                    <button className="NavbarLink" onClick={() => {
                        const element = document.getElementById('separator2')
                        setShowBar(false)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
                        Experiences
                    </button>
                </li>
                <li className="NavbarItem">
                    <button className="NavbarLink" onClick={() => {
                        const element = document.getElementById('separator3')
                        setShowBar(false)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
                        More about me
                    </button>
                </li>

                <li className="NavbarItem">
                    <button className="NavbarLink" onClick={() => {
                        const element = document.getElementById('separator4')
                        setShowBar(false)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
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