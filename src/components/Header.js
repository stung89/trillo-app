import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Icon from '../components/Icon';

export const Header = ({ startLogout }) => (
    <header className="header">
        <img src="images/logo.png" alt="Trillo logo" className="logo"/>
        
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search hotels"/>
            <ul className="search__dropdown">
                <li className="search__dropdown--item">suggestion 1</li>
                <li className="search__dropdown--item">suggestion 2</li>
                <li className="search__dropdown--item">suggestion 3</li>
                <li className="search__dropdown--item">suggestion 4</li>
                <li className="search__dropdown--item">suggestion 5</li>
            </ul>
            <button className="search__button">
                <Icon name="icon-magnifying-glass" />
            </button>
        </form>
        
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <Icon name="icon-bookmark" />
                <span className="user-nav__notification">7</span>
                <ul className="user-nav__dropdown">
                    <li className="user-nav__list">choice 1</li>
                    <li className="user-nav__list">choice 2</li>
                    <li className="user-nav__list">choice 3</li>
                    <li className="user-nav__list">choice 4</li>
                </ul>
            </div>
            <div className="user-nav__icon-box">
                <Icon name="icon-chat" />
                <span className="user-nav__notification">13</span>
                <ul className="user-nav__dropdown">
                    <li className="user-nav__list">choice 1</li>
                    <li className="user-nav__list">choice 2</li>
                    <li className="user-nav__list">choice 3</li>
                    <li className="user-nav__list">choice 4</li>
                </ul>
            </div>
            <div className="user-nav__user">
                <img src="images/user.jpg" alt="User photo" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">Jonas</span>
            </div>
            <div className="user-nav__button">
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);