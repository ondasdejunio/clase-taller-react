import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'

export default function Cuarto() {
    const [value, setValue] = useState("")
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [numberThree, setNumberThree] = useState(0)

    const onClickButton = () => {
        const arrayNumbers = [numberOne, numberTwo, numberThree]
        const countsObject = {}
        arrayNumbers.forEach((x) => countsObject[x] = (countsObject[x] || 0) + 1)
        if(Object.values(countsObject).length < 3){
            setValue(`${Math.max(...Object.values(countsObject))} números están repetidos`)
        } else {
            setValue("No hay números repetidos")
        }
    }

  return (
    <Card title={"4) El sabelotodo"} description={"Digita tres números y él sabrá cuántos hay repetidos."}>
        <Input value={numberOne} label="Número 1" type="number" onChange={(e) => setNumberOne(Number(e.target.value))}/>
        <Input value={numberTwo} label="Número 2" type="number" onChange={(e) => setNumberTwo(Number(e.target.value))}/>
        <Input value={numberThree} label="Número 3" type="number" onChange={(e) => setNumberThree(Number(e.target.value))}/>
        <Message>{value}</Message>
        <Button label="Presióname" onClick={onClickButton}/>
    </Card>
  )
}
