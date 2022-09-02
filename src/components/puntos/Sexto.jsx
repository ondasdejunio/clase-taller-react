import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'
import List from '../common/List'

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
        <Message hide={arrayNumbers.length === 0}>
            <List title={"Números impares"} arrayItems={arrayNumbers} />
        </Message>
    </Card>
  )
}
