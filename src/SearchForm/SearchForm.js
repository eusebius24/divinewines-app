import React from 'react';
import { createBrowserHistory } from 'history';
import '../App/App.css';
import './SearchForm.css';
import DivineWinesContext from '../context/DivineWinesContext';
import Footer from '../Footer/Footer.js';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            vintner: '',
            varietal: '',
            year: '',
            region: '',
            tasting_notes: '',
            rating: ''
        }
    }
    static contextType = DivineWinesContext;

    handleGoBack() {
        const history = createBrowserHistory();
        history.goBack();
    }
    componentDidMount() {
        this.setState({
            records: this.context.records
        })
        
    }

    handleInputChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, vintner, varietal, year, region, tasting_notes, rating } = this.state;
        const searchResults = this.context.records;

        let newResults = [];

        for(let i=0; i<searchResults.length; i++) {
            if (searchResults[i].name.toLowerCase().includes(name.toLowerCase())) {
                newResults.push(searchResults[i]);
            }
        }

        let newResults2 =[];
        for(let i=0; i<newResults.length; i++) {
            if(newResults[i].vintner.toLowerCase().includes(vintner.toLowerCase())) {
                newResults2.push(newResults[i]);
            }     
        }

        let newResults3 = [];
        for(let i=0; i<newResults2.length; i++) {
            if(newResults2[i].varietal.toLowerCase().includes(varietal.toLowerCase())) {
                newResults3.push(newResults2[i]);
            }
        }

        let newResults4 = [];
        for(let i=0; i<newResults3.length; i++) {
            if(parseInt(newResults3[i].year) === parseInt(year) || year === '') {
                newResults4.push(newResults3[i]);
            }
        }

        let newResults5 = [];
        for(let i=0; i<newResults4.length; i++) {
            if(newResults4[i].region.toLowerCase().includes(region.toLowerCase())) {
                newResults5.push(newResults4[i]);
            }
        }

        let newResults6 = [];
        for (let i=0; i<newResults5.length; i++) {
            if(newResults5[i].tasting_notes.toLowerCase().includes(tasting_notes.toLowerCase())) {
                newResults6.push(newResults5[i]);
            }
        }

        let newResults7 = [];
        for (let i=0; i<newResults6.length; i++) {
            if(parseInt(newResults6[i].rating) === parseInt(rating) || rating === '') {
                newResults7.push(newResults6[i]);
            }
        }

        this.props.history.push({
            pathname: '/search-results',
            state: { results: newResults7 }
        })
    }

    render() {
        return (
            <main role="main">
            <header role="banner">
                <h1>Search Journal</h1>
            </header>
    
            <section className="form-container">
                <p className="directions">Enter as few or as many details as you like.</p>
                <form id="signup-form" onSubmit={this.handleSubmit}>
                            <div className="form-section row">
                                <div className="labels row-cell">
                                <label htmlFor="name">Wine Name</label>
                                </div>
                                <div className="inputs row-cell">
                                    <input type="text" name="name" id="name" placeholder="Name of wine" onChange={ev => this.handleInputChange(ev)} />
                                </div>
                           
                            </div>
                       
                            <div className="form-section row">
                                <div className="labels row-cell">
                                    <label htmlFor="vintner">Vintner</label>
                                </div>
                                <div className="inputs row-cell">
                                    <input type="text" name="vintner" id="vintner" placeholder="Vintner" onChange={ev => this.handleInputChange(ev)} />
                                </div>
                            
                            </div>
                        
                            <div className="form-section row">
                                <div className="labels row-cell">
                                    <label htmlFor="varietal">Varietal</label>
                                </div>
                                <div className="inputs row-cell"></div>
                                    <select name="varietal" id="varietal" onChange={ev => this.handleInputChange(ev)}>
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
                       
                            <div className="form-section row">
                                <div className="labels row-cell">
                                    <label htmlFor="year">Year</label>
                                </div>
                                <div className="inputs row-cell">
                                    <input type="text" name="year" id="year" placeholder="Year" onChange={ev => this.handleInputChange(ev)} />
                                </div>
                            
                            </div>
                        
                            <div className="form-section row">
                                <div className="labels row-cell">
                                    <label htmlFor="region">Region</label>
                                </div> 
                               <div className="inputs row-cell">
                                    <select name="region" id="region" onChange={ev => this.handleInputChange(ev)}>
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
                            <div className="labels row-cell">
                                <label htmlFor="tasting_notes">Tasting Notes</label>
                            </div>
                            <div className="inputs row-cell">
                                <textarea name="tasting_notes" id="tasting_notes" cols="30" rows="10" onChange={ev => this.handleInputChange(ev)}></textarea>
                            </div>
                            
                        </div>
                    
                        <div className="form-section row">
                            <div className="labels row-cell">
                                 <label htmlFor='rating'>Rating (1-5)</label>
                            </div>
                            <div className="inputs">
                                <input type='number' name='rating' id='rating' min='1' max='5' onChange={ev => this.handleInputChange(ev)} />
                            </div>
                           
                        </div>
                    
                        <div className="form-section bottom-buttons bottom-form-buttons">
                            
                            <button type="submit">Search</button>
                        
                        <button onClick={this.handleGoBack}>Cancel</button>
                    </div>
                    <div className="form-section search-footer">
                     <Footer />     
                    </div>
                     
               </form>
              
            </section>
        </main>
        );
    }
}

export default SearchForm;