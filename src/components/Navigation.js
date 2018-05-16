import React from 'react';
import Icon from '../components/Icon';


const Navigation = () => (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="" className="side-nav__link">
                        <Icon name="icon-home" />
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <Icon name="icon-aircraft-take-off" />
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <Icon name="icon-key" />
                        <span>Car rental</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <Icon name="icon-map" />
                        <span>Tours</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; 2018 by trillo, All rights reserved.
            </div>
        </nav>
);

export default Navigation;