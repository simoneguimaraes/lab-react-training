function IdCard(props) {
    return (
        <div className="container">
            <div className="imagem">
               <img src={props.picture} alt="foto do cliente" /> 
            </div>
            <div className="texto">
                <p>First Name: <span>{props.firstName}</span></p>
                <p>Last Name: <span>{props.lastName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height: <span>{props.height}</span></p>
                <p>Birth: <span>{props.birth.toLocaleDateString("en-us")}</span></p>
            </div>

        </div>
    )
}

export default IdCard;