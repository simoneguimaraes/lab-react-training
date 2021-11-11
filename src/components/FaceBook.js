import profiles from '../data/berlin.json';
import FaceBookCard from './FaceBookCard';

function FaceBook(props) {


    return(


        <div>
            {profiles.map((currentCard) => {
                return(
                    <div>
                        <img src={currentCard.img} />
                        <span>First Name: </span>
                    </div>


                )

            })}
        </div>
    )


}


export default FaceBook;
