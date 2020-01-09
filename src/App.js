import React, {Component} from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

//import PhotoResults from './components/PhotoResults';

//import Home from './components/Home';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';
import PhotoResults from './components/PhotoResults';
class App extends Component {

  render(){

    return(
      <BrowserRouter>
        <SearchForm />
        <Navigation />
        <Route path='/pugs' render={()=><PhotoResults query={'Pugs'}/>} />
        <Route path='/brussels-griffons' render={()=><PhotoResults query={'Brussel Griffons'}/>} />
        <Route path='/dog-baths' render={()=><PhotoResults query={'Dog Baths'}/>} />
        
      </BrowserRouter>
      
    );


    };
  }

export default App;
