import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

class SearchResults extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <main role="main">
            <header role="banner">
                <h1>Search Results</h1>
            </header>
    
            <section>
                <div className="search-result">
                    <h3>Collier Creek Cabernet Sauvignon</h3>
                    <ul>
                        <li>Year: 2016</li>
                        <li>Vintner: Peltier</li>
                        <li>Region: California</li>
                        <li>Varietal: Cabernet Sauvignon</li>
                        <li>Tasting notes: Dry but full bodied and smooth with a hint of blackberry</li>
                        <li>Rating: 4 stars</li>
    
                    </ul>
                    <div className="form-section">
                        <Link to="/edit-entry">
                            <button>Edit item</button>
                        </Link>
                        <button>Delete item</button>
                    </div>
                   
                    <hr />
                </div>
                <div className="search-result">
                    <h3>Ch&acirc;teau Le Grand Moulin Collection Grande R&eacute;serve</h3>
                    <ul>
                        <li>Year: 2016</li>
                        <li>Vintner: Sarl Robin</li>
                        <li>Region: Bordeaux</li>
                        <li>Varietal: Cabernet Sauvignon/Merlot/Cabernet Franc</li>
                        <li>Rating: 5 stars</li>
    
                    </ul>
                    <div className="form-section">
                        <Link to="/edit-entry">
                            <button>Edit item</button>
                        </Link>
                        <button>Delete item</button>
                    </div>
                    
                    <hr />
                    <div className="form-section">
                        <Link to="/search-form">
                            <button>Search Again</button>
                        </Link>
                        <Link to="/home">
                            <button>Home Page</button>
                        </Link> 
                    </div>
                   
                </div>
            </section>
        </main>
        );
    }
}

export default SearchResults;