import React from 'react';  
import StandardButton from '../../utils/buttons/StandardButton';
import Slider from "../../utils/dataStructures/Slider";
import SeconadryImage from './SecondaryImage';

const ImageSlider = ({images}) => {

    let imageSlider = new Slider(images);

    let [primaryImage, setPrimaryImage] = React.useState(imageSlider.current());
    let [secondaryImages, setSecondaryImages] = React.useState(imageSlider.others());

    const slide = () => {
        imageSlider.slide();
        setPrimaryImage(imageSlider.current());
        setSecondaryImages(imageSlider.others());
    }

    const back = () => {
        imageSlider.back();
        setPrimaryImage(imageSlider.current());
        setSecondaryImages(imageSlider.others());
    }

    let secondaryImageSlider = secondaryImages.map((url) => {
        return <SeconadryImage image={url} />
    });

    return (  
        <div className="image-slider">
            <div className="image-slider-left">
                {secondaryImageSlider}
            </div>
            <div className="image-slider-right">
                <StandardButton onClick={back} text="<" addClassName={"image-slider-button"} />
                <img src={imageSlider.current()} />
                <StandardButton onClick={slide} text=">" addClassName={"image-slider-button"} />
            </div>

        </div>
    );
}
 
export default ImageSlider;