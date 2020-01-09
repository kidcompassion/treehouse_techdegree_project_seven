import React, { Component } from 'react';
import axios from 'axios';
const ApplicationContext = React.createContext();

export class Provider extends Component {
    // What needs to go in here?

    //The ability to make the api call
    //The query value
    




      performSearch = (query) =>{
        let currentComponent = this;
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=21bdfee84b6b0ccd63987db0f0f7aaf4&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(function (response) {
            currentComponent.setState({
              images: response.data.photos.photo,
              query: query
            });
          })
          .catch(function (error) {
            // handle error
           // console.log(error);
          });
      }

      render(){
          return(
            <ApplicationContext.Provider value={{
                actions: {
                    retrieveImages: this.performSearch,

                }

            }}></ApplicationContext.Provider>
          );
      }

}



export const Consumer = ApplicationContext.Consumer;