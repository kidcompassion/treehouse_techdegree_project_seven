import React from 'react';
import {Data} from '../data';

import Photo from './Photo';

const PhotoResults =()=>{
    console.log(Data[0]['photos']['photo']);
    let data = Data[0]['photos']['photo'];

    let photoResults = data.map((photo)=>{
        return <Photo key={photo.id} 
                      name={`dave`}
                      id={photo.id} 
                      server={photo.server}
                      secret={photo.secret} 
                      title={photo.title}
                    />
    }

        

    );


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




    
        
        return (
            <div className="photo-container">
            <h2>Results</h2>
               <ul>
                {photoResults}
                </ul>
            </div>
           
        );
    
    
    
}

export default PhotoResults;