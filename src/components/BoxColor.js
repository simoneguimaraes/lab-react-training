function BoxColor(props) {
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => 
        x.toString(16).padStart(2, '0')).join('')
    return (
        <div className="color" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, height: '100px', width: '400px'}}>
            <span>rgb({props.r}, {props.g}, {props.b})</span>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}


export default BoxColor;

