import mastercard from './img/master-card.svg';
import visa from './img/visa.png'

function CreditCard(props) {
    function creditCardType(brand) {
        if (brand === 'Visa') {
            return `{<img src={visa}/>}`
        } else {
            return `{<img src={mastercard}/>}`
        }
    }
    return(
        <div>
            <span>{creditCardType(props.type)}</span>
            <span>**** **** **** {props.number.split('').slice(12).join('')}</span>
            <span>Expires {props.expirationMonth.toString().padStart(2, '0')}/{props.expirationYear.toString().split("").splice(2,2).join("")}</span>
            <span>{props.bank}</span>
            <span>{props.owner}</span>
            <span style={{ backgroundColor: props.bgColor, color: props.color, height: '100px', width: '400px'}}></span>
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