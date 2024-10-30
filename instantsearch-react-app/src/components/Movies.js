import React from 'react'
import { Hits } from 'react-instantsearch-dom';
import '../assets/css/Movies.css';

const Movies = () => {
    const Hit = ({ hit }) => (
        <div className="hit">
            <img src={`https://image.tmdb.org/t/p/w500${hit.backdrop_path}`} alt={hit.title} className="hit-image" />
            <div className="hit-content">
                <h2>{hit.title}</h2>
                <p>{hit.overview}</p>
            </div>
        </div>
      );

    return (
        <div className="right-side">
            <div className='MovieTitle'>
                Movie list
            </div>
            <Hits hitComponent={Hit} /> {/* Display the movies here */}
        </div>
    )
}

export default Movies