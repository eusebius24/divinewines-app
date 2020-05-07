import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config'
import { createBrowserHistory } from 'history';

class IndivRecord extends React.Component {
   

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
                return res.json()
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
                <li>Year: {this.props.record.year}</li>
                <li>Vintner: {this.props.record.vintner}</li>
                <li>Region: {this.props.record.region}</li>
                <li>Varietal: {this.props.record.varietal}</li>
                <li>Tasting Notes: {this.props.record.tasting_notes}</li>
                <li>Rating: {this.props.record.rating} stars</li>
            </ul>
            <div className="form-section">
                <Link to="/edit-entry">
                    <button>Edit item</button>
                </Link>
                <button onClick={() => this.deleteRecordRequest(this.props.record.id, this.props.deleteRecord)}>Delete item</button>
            </div>
            
            <hr />
        </div>
        );
    }
}

export default IndivRecord;