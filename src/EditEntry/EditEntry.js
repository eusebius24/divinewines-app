import React from 'react';
import config from '../config';
import { createBrowserHistory } from 'history'; 
import DivineWinesContext from '../context/DivineWinesContext';
import '../App/App.css';

class EditEntry extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
        error: null,
        records: []
        }
    }
    static contextType = DivineWinesContext;
    handleGoBack() {
        const history = createBrowserHistory();
        history.goBack();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { record } = this.props.location.state
       
        const name = document.getElementById("name").value;
        const vintner = document.getElementById("vintner").value;
        const varietal = document.getElementById("varietal").value;
        const year = document.getElementById("year").value;
        const region = document.getElementById("region").value;
        const notes = document.getElementById("notes").value;
        const rating = document.getElementById("rating").value;
        console.log('You clicked submit!');
        const updatedRecord = { 
            id: record.id,
            name: name,
            vintner: vintner,
            varietal: varietal,
            year: parseInt(year),
            region: region,
            notes: notes,
            rating: parseInt(rating)
         };
         const recordId = updatedRecord.id;
         this.context.updateItemRequest(updatedRecord, recordId);
         this.props.history.push('/home');
            
     }        

    componentDidMount() {
        window.scrollTo(0, 0); 
        const recordId = this.props.location.state.record.id
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
                notes: record.tasting_notes,
                rating: record.rating
             })
             console.log(this.state.name);
         })
         .catch(err => {
            this.setState({
                error: err.message
            });
        });
       
    }

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

    notesChanged(notes) {
        this.setState({
            notes
        })
    }

    ratingChanged(rating) {
        this.setState({
            rating
        })
    }

   

    
    render() {
        const record = this.props.location.state.record
        return (
            <main role ="main">
            <header role="banner">
                <h1>Edit Journal Entry</h1>
            </header>
            <section>
                <form id="edit-form" onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="name">Wine Name</label>
                        <input type="text" id="name" defaultValue={record.name} onChange={e => this.nameChanged(e.target.value)}/>
                    </div>

                    <div className="form-section">
                        <label htmlFor="vintner">Vintner</label>
                        <input type="text" id="vintner" defaultValue={record.vintner} onChange={e => this.vintnerChanged(e.target.value)} />
                    </div>

                    <div className="form-section">
                        <label htmlFor="varietal">Varietal</label>
                        <select name="varietal" id="varietal" defaultValue={record.varietal} onChange={e => this.varietalChanged(e.target.value)}>
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
                        <input type="text" id="year" defaultValue={record.year} onChange={e => this.yearChanged(e.target.value)}/>
                    </div>

                    <div className="form-section">
                        <label htmlFor="region">Region</label>
                        <select name="region" id="region" defaultValue={record.region} onChange={e => this.regionChanged(e.target.value)}>
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
                        <textarea name="notes" id="notes" defaultValue={record.tasting_notes} onChange={e => this.notesChanged(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-section">
                        <label htmlFor='rating'>Rating</label>
                        <input type='number' name='rating' id='rating' placeholder='3' defaultValue={record.rating} onChange={e => this.ratingChanged(e.target.value)}min='1' max='5'
                            required />
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

export default EditEntry;