import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const images = props.images.map(
        (image) => <ImageCard key={image.id} image={image} />
        );
            // // console.log(image.urls.regular);
            // // return (
            //     <ImageCard
            //         key={image.id}
            //         image={image}
            //         // alt={image.alt_description}
            //         // src={image.urls.regular}
            //     />
            
     
    return (
        <div className="container">
            <div className="image-list">
                {images}
            </div>
        </div>
    );

}

export default ImageList;