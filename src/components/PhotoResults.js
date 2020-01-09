import React, { Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import Photo from './Photo';


class PhotoResults extends Component{
  
  constructor(){
    super();

    this.state = {
      data: [], 
      loading: false
    }
  }



  componentDidMount(){
    console.log(this.props);
    this.handleSearch(this.props.query);
  }


  photoResults =()=>{

    let photos = this.state.data.map((photo) => {
       return <Photo 
                id={photo.id}
                key={photo.id}
                title={photo.title}
                secret={photo.secret}
                server={photo.server}
                

                />
    }); 
    return photos;
  }


  handleSearch = (query) =>{
    

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=77fd04f9f92ce8e38c484eee7a5735a0&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos.photo);
        this.setState({
          data: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
    
  
  
    


  /*  let courses = props.data.map((course) => {
        return <Course title={course.title}
                       desc={course.description}
                       img={course.img_src}
                       key={course.id} />
      }); 
      return (
        <div>
          <ul>
            {courses}    
          </ul>
        </div>
      );
    }*/




    
render() {
  return(
        <div className="photo-container">
            <h2>Results</h2>
        <ul>
          
                {this.photoResults()}
                </ul>
                
            </div>
  )
}
           
           
        
    
    
    
}

export default withRouter(PhotoResults);