import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('SB08EXFLZA', 'f1ca066eb8c4647bec98d399ffba71dc');

const Hit = ({ hit }) => (
  <div>
    <img src={`https://image.tmdb.org/t/p/w500${hit.backdrop_path}`} alt={hit.title} />
    <h2>{hit.title}</h2>
    <p>{hit.overview}</p>
  </div>
);

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="movie">
    <SearchBox />
    <Hits hitComponent={Hit}/>
  </InstantSearch>
);

export default App;
