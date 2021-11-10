import mastercard from './img/master-card.svg';
import visa from './img/visa.png'

function CreditCard(props) {
    function creditCardType(brand) {
        if (brand === 'Visa') {
            return <img src={visa} style={{width: '50px'}}/>
        } else {
            return <img src={mastercard} style={{width: '50px'}}/>
        }
    }
    return(
        <div>
            <div style={{ backgroundColor: props.bgColor, color: props.color, height: '150px', width: '300px'}}>
                <p>{creditCardType(props.type)}</p>
                <p>**** **** **** {props.number.split('').slice(12).join('')}</p>
                <span>Expires {props.expirationMonth.toString().padStart(2, '0')}/{props.expirationYear.toString().split("").splice(2,2).join("")}</span>
                <span>{props.bank}</span>
                <p>{props.owner}</p>
            </div>
        </div>
       
    )
}

export default CreditCard;
/*
type="Visa"
number="0123456789018845"
expirationMonth={3}
expirationYear={2021}
bank="BNP"
owner="Maxence Bouret"
bgColor="#11aa99"
color="white" 
*/