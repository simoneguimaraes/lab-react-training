import profiles from '../data/berlin.json';
import FaceBookCard from './FaceBookCard';

function FaceBook(props) {
    return(
        <div>
            {profiles.map((currentCard) => {
                return(
                <img src={currentCard.img} alt={currentCard.name} />
                )
            })}
        </div>
    )
}


export default FaceBook;
