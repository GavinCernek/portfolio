
import React from 'react';
import './Toolbar.css';
import { Link } from 'react-router-dom';

const toolbar = () => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">Gavin Cernek</div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <Link to="/portfolio">
                        <li>HOME</li>
                    </Link>
                    
                    <Link to="/about">
                        <li>ABOUT</li>
                    </Link>
                    
                    <Link to="/contact">
                        <li>CONTACT</li>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;