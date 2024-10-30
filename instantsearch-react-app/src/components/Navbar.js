// Navbar.js
import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import jayjaysLogo from '../assets/images/jayjays.png';
import '../assets/css/CustomSearchBox.css';

const Navbar = () => {


    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#cbc8c7', color: '#fff' }}>
        <div>
            <img src={jayjaysLogo} alt="JAYJAYS" height="50px"/>
        </div>
        <div>
            <SearchBox className="custom-search-box"/> {/* Use the SearchBox component here */}
        </div>
        </nav>
    );
};

export default Navbar;
