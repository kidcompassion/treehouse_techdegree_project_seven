import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';
import PhotoResults from './components/PhotoResults';
//import Photo from './components/Photo';

// App state should be able to tell whether the user is searching or filtering to show/hide components
//Show total results



function App() {
  return (
    <div className="App container">
      
      
        <SearchForm />
        <Navigation />
        <PhotoResults />
      
    </div>
  );
}

export default App;
