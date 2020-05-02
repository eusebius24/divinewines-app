import React from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history'; 
import '../App/App.css';

class EditEntry extends React.Component {
    handleGoBack() {
        const history = createBrowserHistory();
        history.push('/home');
    }

    render() {
        return (
            <main role ="main">
            <header role="banner">
                <h1>Edit Journal Entry</h1>
            </header>
            <section>
                <form id="edit-form">
                    <div className="form-section">
                        <label for="name">Wine Name</label>
                        <input type="text" id="name" placeholder="Veramonte Organic Riserva Carmen&egrave;re" />
                    </div>

                    <div className="form-section">
                        <label for="vintner">Vintner</label>
                        <input type="text" id="vintner" placeholder="Veramonte" />
                    </div>

                    <div className="form-section">
                        <label for="varietal">Varietal</label>
                        <select name="varietal" id="varietal">
                            <option value="">--Please choose an option--</option>
                            <option value="Chardonnay">Chardonnay</option>
                            <option value="Sauvignon Blanc">Sauvignon Blanc</option>
                            <option value="Pinot Grigio">Pinot Grigio</option>
                            <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                            <option value="Merlot">Merlot</option>
                            <option value="Pinot Noir">Pinot Noir</option>
                            <option value="Shiraz">Shiraz</option>
                            <option value="Ros&eacute;">Ros&eacute;</option>
                            <option value="Riesling">Riesling</option>
                            <option value="Valpolicella">Valpolicella</option>
                            <option selected value="Carmen&egrave;re">Carmen&egrave;re</option>
                        </select>
                    </div>

                    <div className="form-section">
                        <label for="year">Year</label>
                        <input type="text" id="year" placeholder="2018" />
                    </div>

                    <div className="form-section">
                        <label for="region">Region</label>
                        <select name="region" id="region">
                            <option value="">--Please choose an option--</option>
                            <option value="Australia">Australia</option>
                            <option selected value="Chile">Chile</option>
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Niagara">Niagara</option>
                            <option value="California">California</option>
                            <option value="Spain">Spain</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Portugal">Portugal</option>
                            <option value="New Zealand">New Zealand</option>
                        </select>
                    </div>

                    <div className="form-section textarea">
                        <label for="notes">Tasting Notes</label>
                        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-section">
                        <label htmlFor='rating'>Rating</label>
                        <input type='number' name='rating' id='rating' placeholder='3' defaultValue='3' min='1' max='5'
                            required />
                    </div>
                    <div className="form-section">
                        <Link to="/home">
                            <button>Submit</button>
                        </Link>
                        <button onClick={this.handleGoBack}>Cancel</button>
                    </div>
                   
                </form> 
            </section>  
        </main>
        );
    }
}

export default EditEntry;