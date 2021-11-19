/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
// import NavBar from './navBar.css';

function NavBar(props) {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">

                <a class="navbar-brand">Just US Music Productions</a>  

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholders="Search" aria-label="Search">
                    </input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;