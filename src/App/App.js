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

function App() {
  return (
    <main className='App'>
      <NavBar />
      
      <BrowserRouter>
                 <Switch>
                    <Route exact path = '/'
                    component={Landing} />
                    <Route path = '/home' component={Home} />
                    <Route path = '/add-entry' component={AddEntry} />
                    <Route path="/edit-entry" component={EditEntry} />
                    <Route path = '/search-form' component={SearchForm} />
                    <Route path = "/search-results" component={SearchResults} />
                    <Route component={NotFound} />
                 </Switch>
            </BrowserRouter>
    </main>
  );
}

export default App;