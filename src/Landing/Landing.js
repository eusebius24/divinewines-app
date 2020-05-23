import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../App/App.css';
import './Landing.css';
import Footer from '../Footer/Footer.js';


class Landing extends React.Component {

    render() {
        return (
            <BrowserRouter>
            <main className="container">
                 <header role="banner" className={this.props.backgroundClass}>
            <h1>Divine Wines</h1>
           
        </header>
        <h2 className="banner-headline">Easy-to-use journal software for the wine enthusiast</h2>
        <div className="section-container">
            <section className="landing-section">
                <h2>Customizable journal format</h2>
                <p>Allows you to keep track of wine qualities that matter to you the most</p>
            </section>

            <section className="landing-section">
                <h2>Preserve your impressions of wines you've tasted</h2>
                <p>Keep tasting notes, records of vintners, varietals and years, and star ratings</p>
            </section>

            <section className="landing-section">
                <h2>Search wines by year, varietal, region and more!</h2>
                <p>Receive a custom list of wines that meets your criteria!</p>
            </section>
            
        </div>
        <div className="signup-section">
                <h2>Sign up now!</h2>

                <Link to="/home">
                    <button>Sign up</button>
                </Link>
                <p><small>Note: The authentication feature will be added later.</small></p>
        </div>
        <Footer />
    </main>
    </BrowserRouter>
        );
    }
}

export default Landing;