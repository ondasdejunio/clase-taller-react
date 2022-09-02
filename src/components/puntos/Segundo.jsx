import React, { useState } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'

export default function Segundo() {
    const [value, setValue] = useState("")
    const [calculatedValue, setCalculatedValue] = useState("")

    const onChangeInput = e => {
        const regex = new RegExp("^[1-9]+[0-9]*$");
        if(regex.test(e.target.value)) {
            setValue(e.target.value)
        } else {
            setValue("0")
        }
    }

    const onClickButton = () => {
        if(value !== "0") {
            if(value <= 3){
                setCalculatedValue(100)
            }
            else {
                setCalculatedValue(100 + (value-3)*50)
            }
        } else {
            setCalculatedValue(0)
        }
    }

  return (
    <Card title={"2) Calculadora de Precios"} description={"Digita la cantidad de minutos de una llamada."}>
        <Input value={value} label="Cantidad de minutos" placeholder="Ingresa la cantidad de minutos" type="number" min={"0"} onChange={onChangeInput}/>
        <Input readonly value={calculatedValue} label="Total a pagar" type="text"/>
        <Button label="Calcúlame" onClick={onClickButton}/>
    </Card>
  )
}
