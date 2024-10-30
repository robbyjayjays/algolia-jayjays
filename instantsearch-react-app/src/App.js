import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import './assets/css/Screen.css';

const searchClient = algoliasearch('SB08EXFLZA', 'f1ca066eb8c4647bec98d399ffba71dc');

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="movie">
    <Navbar />
    <div className="container">
      <Movies />
    </div>
  </InstantSearch>
);

export default App;
