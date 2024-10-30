// Navbar.js
import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import '../assets/css/CustomSearchBox.css';

const Navbar = () => {


    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#cbc8c7', color: '#fff', width: '30.5%'}}>
        <div>
            <SearchBox className="custom-search-box"/> {/* Use the SearchBox component here */}
        </div>
        </nav>
    );
};

export default Navbar;
