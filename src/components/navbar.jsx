import React, { Component } from 'react';


const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered');
    //cannot use lifecycle hooks to render compnents in a stateless 
    //functional component because there is a single statement that returns
    //the output of the component.
    //can only use class components for lifecyycle hooks!!

    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar
                <span className="badge badge-pill badge secondary">
                    {totalCounters}
                </span>
            </span>
          </div>
        </nav>
        
                  );
};

export default NavBar;