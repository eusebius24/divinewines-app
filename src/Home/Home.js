import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './Home.css';
import IndivRecord from '../IndivRecord/IndivRecord'
import DivineWinesContext from '../context/DivineWinesContext';
import Footer from '../Footer/Footer';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }

    }

static contextType = DivineWinesContext;

    componentDidMount() {
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
        return (
        <>
        
           <main role="main">
                <header role="banner" className={this.props.background}>
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
                    <Footer />
                </section>
            </main>
        </>
        );
    }
}

export default Home;