import React from 'react';

const TitlePhoto = ({image, children}) => {
    console.log("TitlePhoto");
    console.log(image);

    return (  
        <img className="title-photo" src={image} >
            {children}
        </img>
    );
}
 
export default TitlePhoto;