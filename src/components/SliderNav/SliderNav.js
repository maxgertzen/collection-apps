import './SliderNav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hmbrgr from './assets/hamburger.png'

function SliderNav({ links }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <nav className={expanded ? 'slider-nav' : 'slider-nav collapsed'}>
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            <Link key={Math.floor(Math.random() * (index + 1) * 100000)} className="list-item" to={link}>
                                <li>
                                    {link.substring(1).split('-').join(' ')}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
            <img src={hmbrgr} alt="hamburger menu" onClick={() => setExpanded(!expanded)} />
        </nav>
    )
}

export default SliderNav;