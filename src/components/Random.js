function Random(props) {
    return (
        <div style={{border: '1px solid black'}}>
            <p>Random value between {props.min} and {props.max} {"=>"} {Math.floor((Math.random() * props.max) + props.min)}</p>
        </div>

    )
}


export default Random;