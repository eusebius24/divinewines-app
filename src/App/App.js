import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import Landing from '../Landing/Landing.js';
import Home from '../Home/Home.js';
import AddEntry from '../AddEntry/AddEntry.js';
import EditEntry from '../EditEntry/EditEntry.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SearchResults from '../SearchResults/SearchResults.js';
import NotFound from '../NotFound/NotFound.js';
import wineStore from '../store';
import DivineWinesContext from '../context/DivineWinesContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: wineStore
    }
    this.addRecord = this.addRecord.bind(this);
  }

  addRecord = record => {
    this.setState({
      store: [ ...this.state.store, record ],
    })

    
  }
  render() {
    const contextValue = {
      addRecord: this.addRecord,
    }
    return (
      <main className='App'>
        <NavBar />
        <DivineWinesContext.Provider value={contextValue}>

        
          <BrowserRouter>
                   <Switch>
                      <Route exact path = '/'
                      component={Landing} />
                      <Route path = '/home' render={(props) => <Home store={this.state.store} {...props} />} />
                      <Route path = '/add-entry' render={(props) => <AddEntry addRecord={() => this.addRecord} {...props} /> } />
                      <Route path="/edit-entry" component={EditEntry} />
                      <Route path = '/search-form' component={SearchForm} />
                      <Route path = "/search-results" component={SearchResults} />
                      <Route component={NotFound} />
                   </Switch>
              </BrowserRouter>
        </DivineWinesContext.Provider>
      </main>
    );
  }
 
}

export default App;