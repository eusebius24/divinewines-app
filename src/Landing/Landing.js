import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

class Landing extends React.Component {

    render() {
        return (
            <main className="container">
                 <header role="banner">
            <h1>Divine Wines</h1>
            <h2>Easy-to-use journal software for the wine enthusiast</h2>
        </header>

        <section>
            <h2>Customizable journal format</h2>
            <p>Allows you to keep track of wine qualities that matter to you the most</p>
        </section>

        <section>
            <h2>Preserve your impressions of wines you've tasted</h2>
            <p>Keep tasting notes, records of vintners, varietals and years, and star ratings</p>
        </section>

        <section>
            <h2>Search wines by year, varietal, region and more!</h2>
            <p>Receive a custom list of wines that meets your criteria!</p>
        </section>
        <section>
            <h2>Sign up now!</h2>

            <Link to="/home">
                <button>Sign up</button>
            </Link>
            <p><small>Note: The authentication feature will be added later.</small></p>
        </section>
            </main>
        );
    }
}

export default Landing;