import React from 'react';
import config from '../config';
import { createBrowserHistory } from 'history'; 
import DivineWinesContext from '../context/DivineWinesContext';
import Footer from '../Footer/Footer.js';
import '../App/App.css';
import './EditEntry.css';

class EditEntry extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
        error: null,
        name: '',
        vintner: '',
        varietal: '',
        year: '',
        region: '',
        tasting_notes: '',
        rating: '',
        }
    }

    static contextType = DivineWinesContext;

    handleGoBack() {
        const history = createBrowserHistory();
        history.goBack();
    }

    handleInputChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { record } = this.props.location.state;
        const updatedRecord = { 
            id: record.id,
            name: this.state.name,
            vintner: this.state.vintner,
            varietal: this.state.varietal,
            year: parseInt(this.state.year),
            region: this.state.region,
            tasting_notes: this.state.tasting_notes,
            rating: parseInt(this.state.rating)
         };
         const recordId = updatedRecord.id;
         this.context.updateItemRequest(updatedRecord, recordId);
         this.setState({
            error: null,
            name: '',
            vintner: '',
            varietal: '',
            year: '',
            region: '',
            tasting_notes: '',
            rating: '',
         })
         this.props.history.push('/home');
     }        

    componentDidMount() {
        const recordId = this.props.location.state && this.props.location.state.record.id
        fetch(`${config.API_ENDPOINT}/records/${recordId}`, {
            method: 'GET'
        })
            .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return res.json();
         })
         .then(record => {
             this.setState({
                name: record.name,
                vintner: record.vintner,
                varietal: record.varietal,
                year: record.year,
                region: record.region,
                tasting_notes: record.tasting_notes,
                rating: record.rating
             })
         })
         .catch(err => {
            this.setState({
                error: err.message
            });
        });
       
    }

    render() {
        return (
            <main role ="main">
                <header role="banner">
                    <h1>Edit Journal Entry</h1>
                </header>
                <section className="edit-form"> 
                    <form id="edit-form" onSubmit={this.handleSubmit}>
                        <div className="form-section row">
                            <div className="labels row-cell">
                            <label htmlFor="name">Wine Name</label>
                            </div>
                            <div className="inputs row-cell">
                                <input type="text" id="name" name="name" value={this.state.name} onChange={ev => this.handleInputChange(ev)}/>
                            </div>
                        
                        </div>
                        
                        <div className="form-section row">
                            <div className="labels row-cell">
                                <label htmlFor="vintner">Vintner</label>
                            </div>
                            <div className="inputs row-cell">
                                <input type="text" id="vintner" name="vintner" value={this.state.vintner} onChange={ev => this.handleInputChange(ev)} />
                            </div>
                        </div>
                        
                        <div className="form-section row">
                            <div className="labels row-cell">
                                <label htmlFor="varietal">Varietal</label>
                            </div>
                            <div className="inputs row-cell">
                                <select name="varietal" id="varietal" value={this.state.varietal} onChange={ev => this.handleInputChange(ev)}>
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
                                <input type="text" id="year" name="year" value={this.state.year} onChange={ev => this.handleInputChange(ev)}/>
                            </div>
                    
                        </div>
                
                        <div className="form-section row">
                            <div className="labels row-cell">
                                <label htmlFor="region">Region</label>
                            </div>
                            <div className="inputs row-cell">
                                <select name="region" id="region" value={this.state.region} onChange={ev => this.handleInputChange(ev)}>
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
                                <textarea name="tasting_notes" id="tasting_notes" value={this.state.tasting_notes} onChange={ev => this.handleInputChange(ev)} cols="30" rows="10"></textarea>
                            </div>
                        
                        </div>
                        
                        <div className="form-section row">
                            <div className="labels row-cell">
                                <label htmlFor='rating'>Rating</label>
                            </div>
                            <div className="inputs row-cell">
                                <input type='number' name='rating' id='rating' placeholder='3' value={this.state.rating} onChange={ev => this.handleInputChange(ev)} min='1' max='5' />
                            </div>
                    
                        </div>
                        
                        <div className="form-section bottom-buttons bottom-form-buttons">
                        
                            <button>Submit</button>
                        
                            <button onClick={this.handleGoBack}>Cancel</button>
                        </div>
                    </form> 
                <Footer />
            </section>  
        </main>
        );
    }
}

export default EditEntry;