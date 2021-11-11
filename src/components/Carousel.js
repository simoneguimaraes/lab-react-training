import { useState } from "react";

function Carousel(props) {
    const [image, setImage] = useState(0)

    function rightClick() {
        if(image < (props.imgs.length - 1)) {
        setImage(image + 1)
        } else {
            setImage(0);
        }
    }
    
    function leftClick() {
        if(image > 0) {
        setImage(image - 1)
        } else {
            setImage(props.imgs.length - 1);
        }
    }

    return(
        <div>
            <button style={{fontSize: '25px', backgroundColor: 'green'}} onClick={leftClick}>Left</button>
            <img style={{height: '255px', width: '255px'}} src={props.imgs[image]} alt='picture'/>
            <button style={{fontSize: '25px', backgroundColor: 'green'}} onClick={rightClick}>Right</button>
        </div>
    )
}


export default Carousel;
