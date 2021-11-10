function DriverCard(props) {
    function createStars(rate) {
        if (rate === 0) {
            return `☆☆☆☆☆`
        } else if (rate === 1) {
            return `★☆☆☆☆`
        } else if (rate === 2) {
            return `★★☆☆☆`
        } else if (rate === 3) {
            return `★★★☆☆`
        } else if (rate === 4) {
            return `★★★★☆`
        } else {
            return `★★★★★`
        }
    }
    return(
        <div>
            <img src={props.img} style={{width: '100px'}} />
            <span>{props.name}</span>
            <span>{createStars(Math.round(props.rating))}</span>
            <span>{props.car.model} - {props.car.licensePlate}</span>       
        </div>
    )
}

export default DriverCard;