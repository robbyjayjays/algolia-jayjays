import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import './assets/css/Screen.css';

const apiKey = process.env.REACT_APP_API_KEY;
const apiId = process.env.REACT_APP_API_ID;
const searchClient = algoliasearch(apiId, apiKey);

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="movie">
    <Navbar />
    <div className="containers">
      <Movies />
    </div>
  </InstantSearch>
);

export default App;
