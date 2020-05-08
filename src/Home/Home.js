import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import config from '../config';
import IndivRecord from '../IndivRecord/IndivRecord'
import DivineWinesContext from '../context/DivineWinesContext';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
  
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

     //Updates record in state
    //  updateRecord = record => {
    //     const updatedRecords = this.state.records.map(rec => {
    //      if(rec.id === parseInt(record.id)) {
    //        rec.name = record.name;
    //        rec.vintner = record.vintner;
    //        rec.varietal = record.varietal;
    //        rec.year = parseInt(record.year);
    //        rec.region = record.region;
    //        rec.notes = record.notes;
    //        rec.rating = parseInt(record.rating);
         
    //       return rec;
    //      } else {
    //        return rec;
    //      }
    //     })
    
    //     this.setState({
    //       records: updatedRecords
    //     })
        
    //   }
    
    componentDidMount() {
        
        window.scrollTo(0, 0);
        this.getAllRecords();
        
    }

    
    
    
    makeRecordsList() {

            const recordsList = this.state.records && this.state.records.map(record => {
                return (
                    <IndivRecord record={record} key={record.id} getAllRecords={() => this.getAllRecords} />
                );
            })
            return recordsList;
        }
    

    render() {
       const contextValue = {
        
        getAllRecords: this.getAllRecords,
    }
          
           
        return (
        <DivineWinesContext.Provider value={contextValue}>
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
        </DivineWinesContext.Provider>
        );
    }
}

export default Home;