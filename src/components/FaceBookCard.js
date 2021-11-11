function FaceBookCard(props) {

    return(
        <div>
            <img src={props.img} />
            <span>First Name: {props.firstName}</span>
            <span>Last Name: {props.lastName}</span>
            <span>Country: {props.country}</span>
            <span>Type: { props.isStudent ? 'Student' : 'Teacher' } </span>
        </div>
    )
    
}


export default FaceBookCard;