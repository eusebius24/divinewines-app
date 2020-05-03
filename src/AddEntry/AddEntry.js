import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

class AddEntry extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

   
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/home');
    }


    handleGoBack = (e) => {
        e.preventDefault();
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
                       
                        <optgroup label="South America">
                            <option value="Argentina">Argentina</option>
                            <option value="Chile">Chile</option>
                        </optgroup>
                        
                        <optgroup label="France">
                            <option value="Alsace">Alsace</option>
                            <option value="Burgundy">Burgundy</option>
                            <option value="Bordeaux">Bordeaux</option>
                            <option value="Champagne">Champagne</option>
                            <option value="Loire">Loire</option>
                            <option value="Provence">Provence</option>
                            <option value="Rhone">Rhone</option>
                        </optgroup>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hungary">Hungary</option>
                        <optgroup label="Italy">
                            <option value="Apulia">Apulia</option>
                            <option value="Apulia">Apulia</option>
                            <option value="Calabria">Calabria</option>
                            <option value="Emilia-Romagna">Emilia-Romagna</option>
                            <option value="Liguria">Liguria</option>
                            <option value="Lombardy">Lombardy</option>
                            <option value="Marche">Marche</option>
                            <option value="Piedmont">Piedmont</option>
                            <option value="Sardinia">Sardinia</option>
                            <option value="Sicily">Sicily</option>
                            <option value="Trentino-Alto Adige">Trentino-Alto Adige</option>
                            <option value="Tuscany">Tuscany</option>
                            <option value="Umbria">Umbria</option>
                            <option value="Veneto">Veneto</option>
                        </optgroup>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Spain">Spain</option>
                       
                        <optgroup label="Canada">
                            <option value="Niagara">Niagara</option>
                            <option value="Okanagan">Okanagan</option>
                            <option value="Prince Edward County">Prince Edward County</option>
                        </optgroup>
                        <optgroup label="United States">
                            <option value="California">California</option>
                            <option value="New York">New York</option>
                            <option value="Oregon">Oregon</option>
                        </optgroup>
                        <option value="California">California</option>
                       
                        <optgroup label="Australia">
                            <option value="New South Wales">New South Wales</option>
                            <option value="Queensland">Queensland</option>
                            <option value="South Australia">South Australia</option>
                            <option value="Tasmania">Tasmania</option>
                            <option value="Victoria">Victorias</option>
                            <option value="Western Australia">Western Australia</option>
                        </optgroup>
                        <option value="New Zealand">New Zealand</option>
                        <option value="South Africa">South Africa</option>
                    </select>
                   
                </div>

                <div className="form-section textarea">
                    <label htmlFor="notes">Tasting Notes</label>
                    <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
                </div>
                <div className="form-section rating">
                    <label htmlFor='rating'>Rating</label>
                    <input type='number' name='rating' id='rating' defaultValue='1' min='1' max='5' required />
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