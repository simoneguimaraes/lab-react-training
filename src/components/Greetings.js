function Greetings(props) {
    function verLang(idioma, nome) {
        if (idioma === 'de') {
            return `Hallo ${nome}`
        } else if (idioma === 'en') {
            return `Hello ${nome}`
        } else if (idioma === 'es') {
            return `Hola ${nome}`
        } else {
            return `Bounjour ${nome}`
        }
        
    } 
    return (
        <div>
            <p>{verLang(props.lang, props.children)}</p>
        </div>
    )
}

export default Greetings;