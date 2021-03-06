import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './SearchResults.css';
import IndivRecord from '../IndivRecord/IndivRecord';
import Footer from '../Footer/Footer.js';

class SearchResults extends React.Component {
    
    render() {
        const { results } = this.props.location.state;
        if(!results) {
            return <p>Loading ...</p>
        } else {
            const resultsList = results.map(record => {
                return (
                    <IndivRecord record={record} key={record.id} /> 
                )
            })
            return (
                <main role="main">
                <header role="banner">
                    <h1>Search Results</h1>
                </header>
        
                <section className="results-list">
                {(!results) ? "loading..." :
                    resultsList}
                        <div className="form-section bottom-buttons">
                            <Link to="/search-form">
                                <button>Search Again</button>
                            </Link>
                            <Link to="/home">
                                <button>Home Page</button>
                            </Link> 
                        </div>
                        <Footer />
                    
                </section>
               
            </main>
        
        
        );
    }
}
}

export default SearchResults;