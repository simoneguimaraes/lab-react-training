/*
<Random min={1} max={6}/>
<Random min={1} max={100}/>
*/

function Random(props) {
    
    return (
        <div>
            <p>Random value between {props.min} and {props.max}</p>
        </div>

    )
}


export default Random;