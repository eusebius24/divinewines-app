import React from 'react';
import { createBrowserHistory } from 'history';
import '../App/App.css';
import './AddEntry.css';
import config from '../config';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import DivineWinesContext from '../context/DivineWinesContext';

class AddEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            vintner: '',
            varietal: '',
            year: 0,
            region: '',
            tasting_notes: '',
            rating: 1
        }
    }

    static contextType = DivineWinesContext;

    nameChanged(name) {
        this.setState({
            name
        })
    }

    vintnerChanged(vintner) {
        this.setState({
            vintner
        })
    }

    varietalChanged(varietal) {
        this.setState({
            varietal
        })
    }

    yearChanged(year) {
        this.setState({
            year
        })
    }

    regionChanged(region) {
        this.setState({
            region
        })
    }

    tastingNotesChanged(tasting_notes) {
        this.setState({
            tasting_notes
        })
    }

    ratingChanged(rating) {
        this.setState({
            rating
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
    
        const{ name, vintner, varietal, year, region, tasting_notes, rating } = this.state;
        
        const record = { name, vintner, varietal, year, region, tasting_notes, rating };
        const options = {
            method: 'POST',
            body: JSON.stringify(record),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(`${config.API_ENDPOINT}/records`, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return res.json();
             })
             .then (data => {
                 this.setState({
                   
                        name: '',
                        vintner: '',
                        varietal: '',
                        year: '',
                        region: '',
                        notes: '',
                        rating: 1,
                    
                 });
                 this.props.addRecord(record);
                 this.props.getAllRecords();
                 this.props.history.push('/home');
                 
                 
             })
             .catch(err => {
                 this.setState({
                     error: err.message
                 });
             });
        
    }


    handleGoBack() {
        const history = createBrowserHistory();
        history.goBack();
    }

    
    render() {
        return(
            <main role="main">
                <NavBar records={this.context.records} />
                <header role="banner">
                    <h1>Add Journal Entry</h1>
                </header>

                <section>
                    { this.state.error &&
                    <p className="error"> { this.state.error } </p> }

                    <form id="add-form" onSubmit={this.handleSubmit}>
                    
                                <div className="form-section row">
                                    <div className="labels row-cell name-label">
                                        <label htmlFor="name">Wine Name</label>
                                    </div>
                                    
                                    <div className="inputs row-cell">
                                        <input type="text" id="name" value={this.state.name} onChange={e => this.nameChanged(e.target.value)} placeholder="Name of wine" />
                                    </div>
                                
                                </div>
                        
                                <div className="form-section">
                                    <div className="labels row-cell">
                                        <label htmlFor="vintner">Vintner</label>
                                    </div>
                                    <div className="inputs row-cell">
                                        <input type="text" id="vintner" value={this.state.vintner} onChange={e => this.vintnerChanged(e.target.value)}placeholder="Vintner" />
                                    </div>
                                    
                                </div>
                        
                                <div className="form-section row">
                                    <div className="labels row-cell">
                                        <label htmlFor="varietal">Varietal</label>
                                    </div>
                                    <div className="inputs row-cell">
                                        <select name="varietal" id="varietal" onChange={e => this.varietalChanged(e.target.value)}>
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
                                </div>
                                
                            
                        
                                <div className="form-section row">
                                    <div className="labels row-cell">
                                        <label htmlFor="year">Year</label>
                                    </div>
                                    <div className="inputs row-cell">
                                        <input type="text" id="year" value={this.state.year} onChange={e => this.yearChanged(e.target.value)} placeholder="Year" />
                                    </div>
                                </div>
                        
                                <div className="form-section row">
                                    <div className="labels row-cell">
                                        <label htmlFor="region">Region</label>
                                    </div>
                                    <div className="inputs row-cell">
                                        <select name="region" id="region" onChange={e => this.regionChanged(e.target.value)}>
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
                                </div>
                                
                        
                                <div className="form-section row textarea">
                                    <div className="labels row-cell row-cell__left">
                                        <label htmlFor="tasting_notes">Tasting Notes</label>
                                    </div>
                                    <div className="inputs row-cell">
                                        <textarea name="tasting_notes" id="tasting_notes" value={this.state.tasting_notes} onChange={e => this.tastingNotesChanged(e.target.value)} cols="30" rows="10"></textarea>  
                                    </div>
                                </div>
                        
                                <div className="form-section row rating">
                                    <div className="labels row-cell">
                                    <label htmlFor='rating'>Rating</label>
                                    </div>
                                    <div className="inputs row-cell">
                                        <input type='number' name='rating' id='rating' min='1' max='5' value={this.state.rating} onChange={e => this.ratingChanged(e.target.value)} />
                                    </div>
                                </div>
                            
                                <div className="form-section bottom-form-buttons">
                                    <button>Submit</button>
                                
                                    <button onClick={this.handleGoBack}>Cancel</button>
                                </div>
                        
                        <Footer />
                    </form>
                </section>
            </main>
        );
    }
}

export default AddEntry;