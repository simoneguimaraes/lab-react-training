import { useState } from "react";

function LikeButton() {
    let [clickCount, setClickCount] = useState(0);

    function increaseLikes() {
        setClickCount(clickCount + 1)
    }
    return(
        <div>
            <button onClick={increaseLikes} style={{backgroundColor: ['purple','blue','green','yellow','orange','red']}}>{clickCount} Likes</button>
        </div>
    )
}


export default LikeButton;