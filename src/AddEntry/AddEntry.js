import React from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../App/App.css';
import DivineWinesContext from '../context/DivineWinesContext';

class AddEntry extends React.Component {
    
    static contextType = DivineWinesContext;

    handleSubmit = (e) => {
        const history = createBrowserHistory();
        e.preventDefault();
        const { name, year, vintner, region, varietal, notes, rating } = e.target;
        
        const newRecord = {
            name: name.value,
            vintner: vintner.value,
            varietal: varietal.value,
            year: year.value,
            region: region.value,
            notes: notes.value,
            rating: rating.value,
        }
        console.log("newRecord: ", newRecord);
        
        this.context.addRecord(newRecord);
        this.props.history.push('/home');
    }


    handleGoBack = (e) => {
        e.preventDefault();
        const history = createBrowserHistory();
        this.props.history.push('/home');
    }

    
    render() {
        return(
            <main role="main">
        <header role="banner">
            <h1>Add Journal Entry</h1>
        </header>

        <section>

            <form id="add-form" onSubmit={this.handleSubmit}>
                <div className="form-section">
                    <label htmlFor="name">Wine Name</label>
                    <input type="text" id="name" placeholder="Name of wine" />
                </div>

                <div className="form-section">
                    <label htmlFor="vintner">Vintner</label>
                    <input type="text" id="vintner" placeholder="Vintner" />
                </div>

                <div className="form-section">
                    <label htmlFor="varietal">Varietal</label>
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
                        <option value="Carmen&egrave;re">Carmen&egrave;re</option>
                    </select>
                </div>
                <div className="form-section">
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" placeholder="Year" />
                </div>

                <div className="form-section">
                    <label htmlFor="region">Region</label>
                    <select name="region" id="region">
                        <option value="">--Please choose an option--</option>
                        <option value="Australia">Australia</option>
                        <option value="Chile">Chile</option>
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
                    <label htmlFor="notes">Tasting Notes</label>
                    <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
                </div>
                <div className="form-section rating">
                    <label htmlFor='rating'>Rating</label>
                    <input type='number' name='rating' id='rating' defaultValue='1' min='1' max='5' />
                </div>
                <div className="form-section">
                   
                    <button>Submit</button>
                   
                    <button onClick={this.handleGoBack}>Cancel</button>
                </div>
                
            </form>
        </section>
    </main>
        );
    }
}

export default AddEntry;