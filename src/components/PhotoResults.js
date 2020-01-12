import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoResults = (props) =>{

  // Get the images list from the props
  const imageData = props.imageList;
  
  // Set up variable for the rendered components
  let photos;

  // If there's image Data, render it into the correct component structure
  if(imageData.length > 0){
    photos = imageData.map((photo) => {
        return <Photo 
          id={photo.id}
          key={photo.id}
          title={photo.title}
          secret={photo.secret}
          server={photo.server}
        />
      }); 
  // If there isn't data, show the error
  } else {
    photos = <NoResults />
  }

  return (
    <div className="photo-container">
        <h2>Results in "{props.titleTag}"</h2>
        <ul>
        { 
          //Check to see if results are loaded
          (props.loading)
          // If results aren't back, show a loader
          ? <li className="loader"><p>Loading...</p></li>
          // If they are, load the photos
          : photos
        }
      </ul>
    </div>
  );
}       
 
export default PhotoResults;