import React, { Component } from 'react';

//use sfc tab for creating a stateless functional component
//cannot pass props like with a class, so you have to add 
//props to pass through the function
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar
                <span className="badge badge-pill badge secondary">
                    {props.totalCounters}
                </span>
            </span>
          </div>
        </nav>
        
                  );
};

export default NavBar;