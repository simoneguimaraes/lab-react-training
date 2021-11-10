function Rating(props) {
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
     return (
            <div>
                 <p>{createStars(Math.round(props.children))}</p>           
            </div>
    )
}

export default Rating;