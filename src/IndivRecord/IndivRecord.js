import React from 'react';
import { Link } from 'react-router-dom';

class IndivRecord extends React.Component {
   
    render() {
        console.log('this.props.record: ', this.props.record);
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
                <button onClick={this.props.deleteRecordRequest(this.props.record.id, this.props.deleteRecord)}>Delete item</button>
            </div>
            
            <hr />
        </div>
        );
    }
}

export default IndivRecord;