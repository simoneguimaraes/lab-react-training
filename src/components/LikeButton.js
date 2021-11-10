import { useState } from "react";

function LikeButton() {
    let [clickCount, setClickCount] = useState(0);

    const randomColor = ['purple','blue','green','yellow','orange','red']

    function increaseLikes() {
        setClickCount(clickCount + 1)
    }
    

    return(
        <div>
            <button style={{fontSize: '25px', backgroundColor: randomColor[Math.floor((Math.random() * 5))]}} onClick={increaseLikes}>{clickCount} Likes</button>
        </div>
    )
}

export default LikeButton;