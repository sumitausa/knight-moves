import React from 'react';
import Button from 'react-bootstrap/Button';
import SignOutButton from './SignOut';
import { HashLink as Link } from 'react-router-hash-link';
import { AuthUserContext } from './Session';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bar-bg">
      <a className="navbar-brand" href="/">
        <img alt="Logo" src="/imgs/km_logo_basic.png" width="30px" /> Knight
        Moves Cafe
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/brookline"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Brookline
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/brookline/#top">
                Brookline
              </Link>
              <Link className="dropdown-item" to="/brookline/#HowItWorks">
                How It Works
              </Link>
              <Link className="dropdown-item" to="/brookline/#story">
                About
              </Link>
              <Link className="dropdown-item" to="/brookline/#menu">
                Menu
              </Link>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="https://www.facebook.com/knightmovescafe/"
              >
                <i className="fab fa-facebook" />
                Facebook
              </a>
              <a
                className="dropdown-item"
                href="https://www.instagram.com/knightmovescafe/?hl=en"
              >
                <i className="fab fa-instagram" />
                Instagram
              </a>
              <a
                className="dropdown-item"
                href="https://twitter.com/KnightMovesCafe"
              >
                <i className="fab fa-twitter-square" />
                Twitter
              </a>
              <a
                className="dropdown-item"
                href="https://www.meetup.com/knightmovesbrookline/"
              >
                <i className="fab fa-meetup" />
                Meetup
              </a>
              <a
                className="dropdown-item"
                href="https://www.yelp.com/biz/knight-moves-cafe-brookline"
              >
                <i className="fab fa-yelp" />
                Yelp
              </a>
            </div>
          </li>
          <li className="nav-item active dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/somerville"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Somerville
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/somerville/#top">
                Somerville
              </Link>
              <Link className="dropdown-item" to="/somerville/#HowItWorks">
                How It Works
              </Link>
              <Link className="dropdown-item" to="/somerville/#story">
                About
              </Link>
              <Link className="dropdown-item" to="/somerville/#menu">
                Menu
              </Link>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="https://www.facebook.com/knightmovessomerville/"
              >
                <i className="fab fa-facebook" />
                Facebook
              </a>
              <a
                className="dropdown-item"
                href="https://www.instagram.com/knightmovescafe/?hl=en"
              >
                <i className="fab fa-instagram" />
                Instagram
              </a>
              <a
                className="dropdown-item"
                href="https://twitter.com/KnightMovesCafe"
              >
                <i className="fab fa-twitter-square" />
                Twitter
              </a>
              <a
                className="dropdown-item"
                href="https://www.meetup.com/Knight-Moves-Somerville-Open-Table-Gaming/"
              >
                <i className="fab fa-meetup" />
                Meetup
              </a>
              <a
                className="dropdown-item"
                href="https://www.yelp.com/biz/knight-moves-cafe-somerville"
              >
                <i className="fab fa-yelp" />
                Yelp
              </a>
            </div>
          </li>
        </ul>
        <AuthUserContext.Consumer>
          {authUser => {
            return (
              authUser && (
                <React.Fragment>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Button
                        style={{ marginRight: '5px' }}
                        variant="cta"
                        href="/admin"
                      >
                        Admin
                      </Button>
                    </li>
                    <li className="nav-item active">
                      <SignOutButton />
                    </li>
                  </ul>
                </React.Fragment>
              )
            );
          }}
        </AuthUserContext.Consumer>
      </div>
    </nav>
  );
};

export default Navbar;
