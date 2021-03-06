import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import '../normalize.css';
import NavBar from '../NavBar/NavBar.js';
import Landing from '../Landing/Landing.js';
import Home from '../Home/Home.js';
import AddEntry from '../AddEntry/AddEntry.js';
import EditEntry from '../EditEntry/EditEntry.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SearchResults from '../SearchResults/SearchResults.js';
import NotFound from '../NotFound/NotFound.js';
import config from '../config';
import DivineWinesContext from '../context/DivineWinesContext';
import { createBrowserHistory } from 'history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      hasError: false
    }
    this.addRecord = this.addRecord.bind(this)
    this.getAllRecords = this.getAllRecords.bind(this)
    this.deleteRecord = this.deleteRecord.bind(this)
  }
  
  addRecord(record) {
    this.setState({
      records: [...this.state.records, record]
    })
  }

  deleteRecord = (recordID) => {
    const history = createBrowserHistory();
    history.push('/home');
    const newRecords = this.state.records.filter(record => {
      return record.id !== recordID
    })
    this.setState({
      records: newRecords,
    })
    
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
   
  })
  
}

updateItemRequest(updatedRecord, recordId)  {
  fetch(`${config.API_ENDPOINT}/records/${recordId}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedRecord),
      headers: {
          'content-type': 'application/json',
      }
  })
  .then(
      this.getAllRecords()
  )
  .catch(error => {
      this.setState({ error });
     
  })
}   

componentDidMount() {
  this.getAllRecords();
}

  render() {
    const contextValue = {
      records: this.state.records,
      getAllRecords: this.getAllRecords,
      updateItemRequest: this.updateItemRequest,
      deleteRecord: this.deleteRecord,
    }
    return (
      <DivineWinesContext.Provider value={contextValue}>
      <main className='App'>
          <NavBar />
          <BrowserRouter>
            <Switch>
              <Route exact path = '/'
               render={(props) => <Landing backgroundClass={"daniel"}{...props} />} />
              <Route path = '/home' render={(props) => <Home records={this.state.records} backgroundClass={"clay"}{...props} />}  />
              <Route path = '/add-entry' render={(props) => <AddEntry backgroundClass={"ales"} addRecord={() => this.addRecord} getAllRecords={() => this.getAllRecords} {...props} /> } />
              <Route path="/edit-entry" component={EditEntry} />
              <Route path = '/search-form' component={SearchForm} />
              <Route path = "/search-results" component={SearchResults} />
              <Route component={NotFound} />
            </Switch>
           </BrowserRouter>
           
      </main>
    </DivineWinesContext.Provider>
       
    );
  }
 
}

export default App;