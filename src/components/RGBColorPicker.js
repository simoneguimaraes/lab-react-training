import { useState } from "react";

function RGBColorPicker() {
    
    return(
        <div>
            
        </div>
    )
}


export default RGBColorPicker;

/*
Create 2 components:

RGBColorPicker:
state.rValue: A number between 0 and 255, representing the amount of red
state.gValue: A number between 0 and 255, representing the amount of green
state.bValue: A number between 0 and 255, representing the amount of blue
SingleColorPicker: A box with an input range to select an amount of a value
props.color: A string that is either "r", "g" or "b"
props.value: A number between 0 and 255
props.onChange: A method that is triggered when the input is changed
*/