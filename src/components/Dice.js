import { useState } from "react";
import DiceEmpty from './img/dice-empty.png'
import DiceOne from './img/dice1.png'
import DiceTwo from './img/dice2.png'
import DiceThree from './img/dice3.png'
import DiceFour from './img/dice4.png'
import DiceFive from './img/dice5.png'
import DiceSix from './img/dice6.png'

function Dice() {
    return(
        <div>
            <div>
                <img src={DiceEmpty} style={{height: '255px', width: '255px'}} />
                <img src={DiceOne} style={{height: '255px', width: '255px'}} />
                <img src={DiceTwo} style={{height: '255px', width: '255px'}} />
                <img src={DiceThree} style={{height: '255px', width: '255px'}} />
                <img src={DiceFour} style={{height: '255px', width: '255px'}} />
                <img src={DiceFive} style={{height: '255px', width: '255px'}} />
                <img src={DiceSix} style={{height: '255px', width: '255px'}} />
            
            </div>
        </div>
    )
}


export default Dice;

// Create a Dice component that displays a random picture 
//(example: '/img/dice3.png'). Then every time the user clicks on 
//the component:

// An empty picture is displayed ('/img/dice-empty.png')
// 1 second later, a new random picture is displayed 
//(example: '/img/dice6.png').
