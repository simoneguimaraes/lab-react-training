import { useState } from "react";

function ClickablePicture(props) {
    
    const [oldPicture, setNewPicture] = useState(true);

    function handleClick() {
        setNewPicture(!oldPicture);
    }


    return(
        <div onClick={handleClick}>
            {oldPicture ? <img src={props.img}/> : <img src={props.imgClicked}/>}
        </div>
    )
}

export default ClickablePicture;

// não está aparecendo a imagem