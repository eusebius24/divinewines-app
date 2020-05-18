import React from 'react';
import { createBrowserHistory } from 'history';
import '../App/App.css';
import './SearchForm.css';
import DivineWinesContext from '../context/DivineWinesContext';

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
        window.scrollTo(0, 0);
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
        console.log("You clicked submit!");
        const { name, vintner, varietal, year, region, tasting_notes, rating } = this.state;
        console.log("name: ", name);
        const searchResults = this.context.records;

        let newResults = [];

        for(let i=0; i<searchResults.length; i++) {
            if (searchResults[i].name.toLowerCase().includes(name.toLowerCase())) {
                newResults.push(searchResults[i]);
            }
        }
        console.log('newResults: ', newResults);

        let newResults2 =[];
        for(let i=0; i<newResults.length; i++) {
            if(newResults[i].vintner.toLowerCase().includes(vintner.toLowerCase())) {
                newResults2.push(newResults[i]);
            }     
        }
        console.log('newResults2: ', newResults2);

        let newResults3 = [];
        for(let i=0; i<newResults2.length; i++) {
            if(newResults2[i].varietal.toLowerCase().includes(varietal.toLowerCase())) {
                newResults3.push(newResults2[i]);
            }
        }
        console.log('newResults3: ', newResults3);

        let newResults4 = [];
        for(let i=0; i<newResults3.length; i++) {
            if(parseInt(newResults3[i].year) === parseInt(year) || year === '') {
                newResults4.push(newResults3[i]);
            }
        }
        console.log('newResults4: ', newResults4);

        let newResults5 = [];
        for(let i=0; i<newResults4.length; i++) {
            if(newResults4[i].region.toLowerCase().includes(region.toLowerCase())) {
                newResults5.push(newResults4[i]);
            }
        }
        console.log('newResults5: ', newResults5);

        let newResults6 = [];
        for (let i=0; i<newResults5.length; i++) {
            if(newResults5[i].tasting_notes.toLowerCase().includes(tasting_notes.toLowerCase())) {
                newResults6.push(newResults5[i]);
            }
        }
        console.log('newResults6: ', newResults6);

        let newResults7 = [];
        for (let i=0; i<newResults6.length; i++) {
            if(parseInt(newResults6[i].rating) === parseInt(rating) || rating === '') {
                newResults7.push(newResults6[i]);
            }
        }
        console.log('rating: ', rating)
        console.log('newResults7: ', newResults7);

        this.props.history.push({
            pathname: '/search-results',
            state: { results: newResults7 }
        })
    }

    render() {
        console.log('records: ', this.context.records)
        return (
            <main role="main">
            <header role="banner">
                <h1>Search Journal</h1>
            </header>
    
            <section className="form-container">
                <p className="directions">Enter as few or as many details as you like.</p>
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <ul className="flex-outer">
                        <li>
                            <div className="form-section">
                            <label htmlFor="name">Wine Name</label>
                            <input type="text" name="name" id="name" placeholder="Name of wine" onChange={ev => this.handleInputChange(ev)} />
                            </div>
                        </li>
                        <li>
                            <div className="form-section">
                            <label htmlFor="vintner">Vintner</label>
                            <input type="text" name="vintner" id="vintner" placeholder="Vintner" onChange={ev => this.handleInputChange(ev)} />
                            </div>
                        </li>
                        <li>
                            <div className="form-section">
                            <label htmlFor="varietal">Varietal</label>
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
                        </li>
                        <li>
                            <div className="form-section">
                            <label htmlFor="year">Year</label>
                            <input type="text" name="year" id="year" placeholder="Year" onChange={ev => this.handleInputChange(ev)} />
                            </div>
                        </li>
                        <li>
                            <div className="form-section">
                                <label htmlFor="region">Region</label>
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
                    </li>
                    <li>
                        <div className="form-section textarea">
                            <label htmlFor="tasting_notes">Tasting Notes</label>
                            <textarea name="tasting_notes" id="tasting_notes" cols="30" rows="10" onChange={ev => this.handleInputChange(ev)}></textarea>
                        </div>
                    </li>
                    <li>
                        <div className="form-section">
                            <label htmlFor='rating'>Rating</label>
                            <input type='number' name='rating' id='rating' min='1' max='5' onChange={ev => this.handleInputChange(ev)} />
                        </div>
                    </li>
                    <li>
                        <div className="form-section bottom-buttons">
                            
                            <button type="submit">Search</button>
                        
                        <button onClick={this.handleGoBack}>Cancel</button>
                    </div>
                    </li>
                   
                       
                </ul>                  
               </form>
            </section>
        </main>
        );
    }
}

export default SearchForm;