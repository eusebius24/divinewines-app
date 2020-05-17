import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import '../App/App.css';
import './IndivRecord.css';
import DivineWinesContext from '../context/DivineWinesContext';



class IndivRecord extends React.Component {
   
    static contextType = DivineWinesContext;

    deleteRecordRequest(recordId, callback) {
       
        console.log('You clicked delete!');
       
        console.log('recordId: ', recordId)
        console.log(`${config.API_ENDPOINT}/records/${recordId}`);
        fetch(`${config.API_ENDPOINT}/records/${recordId}`, {
            method: 'DELETE'
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
            })

            .then(data => {
                callback(recordId)
              })

            
            .catch(error => {
                console.error(error)
            })
    }
    
    render() {
        console.log('this.props.record.id: ', this.props.record.id);
        return(
            <div className="search-result">
            <h3>{this.props.record.name}</h3>
            <ul>
                <li><span className="result-heading">Year: </span>{this.props.record.year}</li>
                <li><span className="result-heading">Vintner: </span>{this.props.record.vintner}</li>
                <li><span className="result-heading">Region: </span>{this.props.record.region}</li>
                <li><span className="result-heading">Varietal: </span>{this.props.record.varietal}</li>
                <li><span className="result-heading">Tasting Notes: </span>{this.props.record.tasting_notes}</li>
                <li><span className="result-heading">Rating: </span>{this.props.record.rating} stars</li>
            </ul>
            <div className="form-section buttons">
                <Link to={{pathname: `/edit-entry`, state: {record: this.props.record}}}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => this.deleteRecordRequest(this.props.record.id, this.context.deleteRecord)}>Delete</button>
            </div>
        </div>
        );
    }
}

export default IndivRecord;