import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import config from '../config';
import IndivRecord from '../IndivRecord/IndivRecord'
import { createBrowserHistory } from 'history';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
   this.getAllRecords = this.getAllRecords.bind(this)
}

    getAllRecords() {
        fetch(`${config.API_ENDPOINT}/records`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
            return res.json()
            })
      .then(data => {
        this.setState({
          records: data
        })
        console.log("this.state.records: ", this.state.records)
      })
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.getAllRecords();
        
    }

    
    
    
    makeRecordsList() {

            const recordsList = this.state.records && this.state.records.map(record => {
                return (
                    <IndivRecord record={record} key={record.id} deleteRecord={() => this.deleteRecord} />
                );
            })
            return recordsList;
        }
    

    render() {
       
        return (
        <main role="main">
            <header role="banner">
                <h1>Divine Wines - Your Journal Entries</h1>
            </header>

            <section>
          
                {(!this.state.records) ? "loading..." :
                this.makeRecordsList(this.state.records)}
        
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