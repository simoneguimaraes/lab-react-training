import profiles from '../data/berlin.json';
import FaceBookCard from './FaceBookCard';
import { useState } from 'react'

const countries = profiles.map((currentPerson) => currentPerson.country)
const uniqueCountries = [...new Set(countries)]

function FaceBook(props) {
    const [country, setCountry] = useState('')

    function handleClick(event) {
        setCountry(event.target.value) 

    }

    return(
        <>
        <div>
            {profiles.map((currentCard) => {
                return(
                    <FaceBookCard 
                    img={currentCard.img}
                    firstName={currentCard.firstName}
                    lastName={currentCard.lastName}
                    country={currentCard.country}
                    isStudent={currentCard.isStudent}
                    //style={{backgroundColor: country === currentCountry ? 'blue' : ''}}
                    />
                    
                )
            })}
        </div>
        
        {uniqueCountries.map((currentCountry) => <button onClick={handleClick} value={currentCountry} style={{backgroundColor: country === currentCountry ? 'blue' : ''}}>{currentCountry}</button>)}
        
        </>
    )
}


export default FaceBook;
