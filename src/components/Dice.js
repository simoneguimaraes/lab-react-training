import { useState } from "react";
import DiceEmpty from './img/dice-empty.png'
import DiceOne from './img/dice1.png'
import DiceTwo from './img/dice2.png'
import DiceThree from './img/dice3.png'
import DiceFour from './img/dice4.png'
import DiceFive from './img/dice5.png'
import DiceSix from './img/dice6.png'

function Dice() {
    const [dice, setNewDice] = useState(DiceEmpty);
    const randomDices = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix]
    
    function handleClick() {
        setNewDice(DiceEmpty)
        setTimeout(() => {
            setNewDice(randomDices[Math.floor((Math.random() * 5))]) 
        }, 1000);
    }
        
    return(
        <div>
            <img onClick={handleClick} src={dice} style={{height: '255px', width: '255px'}}/>
        </div>
    ) 
}

export default Dice;
