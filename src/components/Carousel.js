import { useState } from "react";

function Carousel(props) {
    const [images, setRandomImage] = useState(0)
    
    function rightClick() {
        if(images > -1 && images < 5) {
            setRandomImage(images + 1)
        }
    }

    function leftClick() {
        if(images > -1 && images < 5) {
            setRandomImage(images - 1)
        }
    }

    return(
        <div>
            <button style={{fontSize: '25px', backgroundColor: 'green'}} onClick={rightClick}>Left</button>
            <img style={{height: '255px', width: '255px'}} src={props.imgs[images]} alt='picture'/>
            <button style={{fontSize: '25px', backgroundColor: 'green'}} onClick={leftClick}>Right</button>
        </div>
    )
}


export default Carousel;
