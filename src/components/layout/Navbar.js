import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Gestion Contact
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/serveur">
                Serveur
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/client">
                Client
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                A Propos
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/contact/add">
          Ajouter
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
