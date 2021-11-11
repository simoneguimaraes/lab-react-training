function NumbersTable(props) {
    let numbersArr =[]

    function createNumbers() {
        for(let i = 1; i <= props.limit; i++) {
            numbersArr.push(i)
        }
    }
    createNumbers()
    return(
        <div>
            {numbersArr.map((currentNumber) => {
              return <span style={{border: '1px solid black'}}>{currentNumber}</span>})}
        </div>
    )
}


export default NumbersTable;
