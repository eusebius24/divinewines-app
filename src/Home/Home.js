import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import IndivRecord from '../IndivRecord/IndivRecord.js';
import DivineWinesContext from '../context/DivineWinesContext';

class Home extends React.Component {
    static contextType = DivineWinesContext;
   
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            recordsList: []
        }
        // console.log("contextType: ", contextType);
    }
  
   componentDidMount() {
      this.setState({
          records: this.context.store
      })
      console.log("records:", this.context.store);
   }
    render() {
        
        // console.log("records: ", this.state.records);
            const recordsList = this.state.records && this.state.records.map 
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
                {(!this.state.records) ? "loading..." :
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