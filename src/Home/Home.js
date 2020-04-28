import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

class Home extends React.Component {
    render() {
        return (
        <main role="main">
            <header role="banner">
                <h1>Divine Wines - Your Journal Entries</h1>
            </header>

            <section>
                <div className="search-result">
                    <h3>Veramonte Organic Riserva Carmen&egrave;re</h3>
                    <ul>
                        <li>Year: 2018</li>
                        <li>Vintner: Veramonte</li>
                        <li>Region: Chile</li>
                        <li>Varietal: Carmen&egrave;re</li>
                        <li>Rating: 3 stars</li>
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
                        <Link to="/add-entry">
                            <button>Add Journal Entry</button>
                        </Link>
                        <Link to="search-form">
                            <button>Search Journal</button>
                        </Link>
                   
                    </div>
                   
                </div>
            </section>


        </main>
        );
    }
}

export default Home;