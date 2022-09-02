import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'

export default function Sexto() {
    const [value, setValue] = useState("")
    const [arrayNumbers, setArrayNumbers] = useState([])

    const onClickButton = () => {
        const array = []
        for(let i = 1; i < value; i++){
            i % 2 !== 0 && array.push(i)
            i++
        }
        setArrayNumbers(array)
        setValue("")
    }

  return (
    <Card title={"6) Calculador de números impares"} description={"Pon un número y te calculo los números impares menores a este."}>
        <Input value={value} label="Inserta tu número" min={"0"} type="number" onChange={(e) => setValue(Number(e.target.value))}/>
        <Button label="Presióname" onClick={onClickButton}/>
        <Message>
            <h3>Los números son:</h3>
            <ol>
                {
                    arrayNumbers.map((number, i) => <li key={i}>{number}</li>)
                }
            </ol>
        </Message>
    </Card>
  )
}
