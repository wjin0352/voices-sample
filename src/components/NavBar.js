import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className='main-wrapper'>
    <header className='page-head' id="home">
      <div className='container' id="top">
        <a className='menu-btn' href='#' id='js-menu-btn'></a>
        <nav className='page-head-nav' id='js-main-nav'>
          <ul>
            <li className='home-link'>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/sample">Sample</Link>
            </li>
            <li>
              <Link to="/findShows">Search Shows</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

export default NavBar;