import React, {Component} from 'react';
import axios from 'axios';
import {config} from './config';
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.css';

// App Components
import SearchForm from './components/SearchForm';
import PhotoResults from './components/PhotoResults';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: 'pug', // Pug is default page
      loading: true
    }
  }

  componentDidMount(){
    this.performSearch(this.state.query); //on initial load, fetch either the default pug data or whatever is currently in state
  }

  /**
   * getQueriedTerm {string}
   * Gets the value of this.props.sendQuery from search and nav components
   */
  getQueriedTerm = (searchTerm) => {
    // Updates the state with the latest search term
    this.setState({query: searchTerm});
    // Rerun the query with this search term
    this.performSearch(searchTerm);
  }

  performSearch = (searchQuery) =>{
    // rename 'this' to avoid naming collisions
    let currentComponent = this;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
      .then(function (response) {
       currentComponent.setState({
         // when data is received, update state
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="container">
      <BrowserRouter>
        <React.Fragment>
          <SearchForm sendQuery = {this.getQueriedTerm} />
          <Switch>
            <Route exact path='/' render={()=> <Redirect to='/pug' /> }/>
            <Route exact path='/search' render={
              ({match})=>
                  <React.Fragment>
                    <Navigation sendQuery={this.getQueriedTerm} match={match} />
                    <PhotoResults loading={this.state.loading} titleTag={match.params.topic} imageList={this.state.images}/>
                  </React.Fragment>
              } />
            <Route path='/pug' render={
                ({match})=>
                  <React.Fragment>
                    <Navigation sendQuery={this.getQueriedTerm} match={match} />
                    <PhotoResults loading={this.state.loading} titleTag={'Pug'} imageList={this.state.images}/>
                  </React.Fragment>
            } />
            <Route path='/brussel-griffon' render={
                ({match})=>
                  <React.Fragment>
                    <Navigation sendQuery={this.getQueriedTerm} match={match} />
                    <PhotoResults loading={this.state.loading} titleTag={'Brussel Griffon'} imageList={this.state.images}/>
                  </React.Fragment>
            } />

            <Route path='/weiner-dog' render={
                ({match})=>
                  <React.Fragment>
                    <Navigation sendQuery={this.getQueriedTerm} match={match} />
                    <PhotoResults loading={this.state.loading} titleTag={'Weiner Dog'} imageList={this.state.images}/>
                  </React.Fragment>
            } />
            <Route path='/search/:topic' render={
              ({match})=>
                  <React.Fragment>
                    <Navigation sendQuery={this.getQueriedTerm} match={match} />
                    <PhotoResults loading={this.state.loading} titleTag={this.state.query} imageList={this.state.images}/>
                  </React.Fragment>
            } />
            <Route render={NotFound}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
    );
  };
}

export default App;

