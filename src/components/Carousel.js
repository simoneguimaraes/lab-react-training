import { useState } from "react";

function Carousel(props) {
    const [images, setRandomImage] = useState(0)
    setRandomImage(props.imgs[Math.floor((Math.random() * 3))]) 

    function rightClick() {
        if(images < props.imgs[images] - 1) {
        setRandomImage(images + 1)
        }
    }
    
    function leftClick() {
        if(images < props.imgs[images] - 1) {
        setRandomImage(images - 1)
        }
    }

    return(
        <div>
            <button style={{fontSize: '25px', backgroundColor: 'green'}} onClick={leftClick}>Left</button>
            <img style={{height: '255px', width: '255px'}} src={props.imgs[images]} alt='picture'/>
            <button style={{fontSize: '25px', backgroundColor: 'green'}} onClick={rightClick}>Right</button>
        </div>
    )
}


export default Carousel;
