import React from 'react';
import '../App/App.css';

class NavBar extends React.Component {
    render() {
        return (
            <ul className="nav">

                <li> <a id="home" className="menu-item" href="/home">Home</a></li>
                <li> <a id="about" className="menu-item" href="/">About</a></li>
                <li><a id="add-entry" className="menu-item" href="/add-entry">Add Journal Entry</a></li>
                <li><a id="search" className="menu-item" href="/search-form">Search Journal</a></li>
            </ul> 
        );
    }
}

export default NavBar;