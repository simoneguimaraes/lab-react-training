import mastercard from './img/master-card.svg';
import visa from './img/visa.png'

/*
type: A string that can be "Visa" or "Master Card"
number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons wink
expirationMonth: A number that represents the month, between 1 and 12
expirationYear: A number that represents the year
bank: A string that represents the name of the bank
owner: A string that represents the name of the owner
bgColor: A string for the background color of the card
color: A string for the text color of the card
*/

function CreditCard(props) {
    return(
        <div>
            {/* <img src={mastercard}/> */}

            <span>**** **** **** {props.number.split('').slice(12).join('')}</span>
            <span>Expires {props.expirationMonth.toString().padStart(2, '0')}/{props.expirationYear.toString().split("").splice(2,2).join("")}</span>
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