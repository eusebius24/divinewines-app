import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './Home.css';
import IndivRecord from '../IndivRecord/IndivRecord'
import DivineWinesContext from '../context/DivineWinesContext';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
  
}

static contextType = DivineWinesContext;


    componentDidMount() {
        window.scrollTo(0, 0);
        this.context.getAllRecords();
        this.setState({
            records: this.props.records
        })
       
        
    }

    
    
    
    makeRecordsList() {

            const recordsList = this.props.records && this.props.records.map(record => {
                return (
                    <IndivRecord record={record} key={record.id} getAllRecords={() => this.getAllRecords} />
                );
            })
            return recordsList;
        }
    

    render() {
        console.log('this.context.records: ', this.context.records)
       console.log('this.props.records: ', this.props.records)
        return (
       
        <main role="main">
            <header role="banner">
                <h1>Divine Wines - Your Journal Entries</h1>
            </header>

            <section className="results-list">
          
                {(!this.state.records) ? "loading..." :
                this.makeRecordsList(this.state.records)}
        
        <div className="bottom-buttons">
            <Link to="/add-entry">
                <button>Add Journal Entry</button>
            </Link>
            <Link to={{pathname: `/search-form`, state: {records: this.props.records}}}>
                <button>Search Journal</button>
            </Link>
        
        </div>
                   
                
            </section>


        </main>
        );
    }
}

export default Home;