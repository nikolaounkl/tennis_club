import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    state = {
        mobileMenu: false
    };
    toggleMenu = () => {
        this.setState(prevState => ({
            mobileMenu: !prevState.mobileMenu
        }));
    };
    render() {
        return (
            <div>
                <nav
                    className="navbar is-white is-fixed-top"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <div className="navbar-brand">
                        <NavLink
                            to="/"
                            className="navbar-item has-text-danger is-size-5"
                        >
                            T.S.V. Marzahner Füchse e.V.
                        </NavLink>

                        <span
                            role="button"
                            className={
                                this.state.mobileMenu
                                    ? "navbar-burger burger is-active"
                                    : "navbar-burger burger"
                            }
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample"
                            onClick={this.toggleMenu}
                        >
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </span>
                    </div>

                    <div
                        id="navbarBasicExample"
                        className={
                            this.state.mobileMenu
                                ? "navbar-menu is-active"
                                : "navbar-menu"
                        }
                    >
                        <div className="navbar-end">
                            <NavLink
                                to="/verein"
                                className="navbar-item"
                                activeClassName="is-active"
                                onClick={this.toggleMenu}
                            >
                                Verein
                            </NavLink>
                            <NavLink
                                to="/vorstand"
                                className="navbar-item"
                                activeClassName="is-active"
                                onClick={this.toggleMenu}
                            >
                                Vorstand
                            </NavLink>
                            <NavLink
                                to="/training"
                                className="navbar-item"
                                activeClassName="is-active"
                                onClick={this.toggleMenu}
                            >
                                Training
                            </NavLink>
                            <NavLink
                                to="/platzbelegung"
                                className="navbar-item"
                                activeClassName="is-active"
                                onClick={this.toggleMenu}
                            >
                                Platzbelegung
                            </NavLink>
                            <NavLink
                                to="/sports"
                                className="navbar-item"
                                activeClassName="is-active"
                                onClick={this.toggleMenu}
                            >
                                Sports
                            </NavLink>
                            <NavLink
                                to="/lageplan"
                                className="navbar-item"
                                activeClassName="is-active"
                                onClick={this.toggleMenu}
                            >
                                Lageplan
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
