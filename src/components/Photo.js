import React from 'react';


const Photo = (props)=>{
   // console.log(props);
    return (
        <li><img src={`https://farm5.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title}/></li>
       
    );
    
}

export default Photo;