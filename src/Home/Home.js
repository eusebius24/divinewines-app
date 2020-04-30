import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import IndivRecord from '../IndivRecord/IndivRecord.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordsList: []
        }
    }
   
    render() {
        const records = this.props.store;
        console.log("records: ", records);
      
            const recordsList = records.map 
            (record => {
                return (
                    <IndivRecord record={record} key={record.id} name={record.name} year={record.year} vintner={record.vintner} region={record.region} varietal={record.varietal} rating={record.rating} />
                )
            })
           
        console.log("recordsList: ", recordsList);
       
        
        return (
        <main role="main">
            <header role="banner">
                <h1>Divine Wines - Your Journal Entries</h1>
            </header>

            <section>
                {(!records) ? "loading..." :
                recordsList
                }
               
                    <div className="form-section">
                        <Link to="/add-entry">
                            <button>Add Journal Entry</button>
                        </Link>
                        <Link to="search-form">
                            <button>Search Journal</button>
                        </Link>
                   
                    </div>
                   
                
            </section>


        </main>
        );
    }
}

export default Home;