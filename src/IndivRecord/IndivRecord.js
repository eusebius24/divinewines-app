import React from 'react';
import { Link } from 'react-router-dom';

class IndivRecord extends React.Component {
    
    render() {
        return(
            <div className="search-result">
            <h3>{this.props.name}</h3>
            <ul>
                <li>Year: {this.props.year}</li>
                <li>Vintner: {this.props.vintner}</li>
                <li>Region: {this.props.region}</li>
                <li>Varietal: {this.props.varietal}</li>
                <li>Rating: {this.props.rating} stars</li>
            </ul>
            <div className="form-section">
                <Link to="/edit-entry">
                    <button>Edit item</button>
                </Link>
                <button>Delete item</button>
            </div>
            
            <hr />
        </div>
        );
    }
}

export default IndivRecord;