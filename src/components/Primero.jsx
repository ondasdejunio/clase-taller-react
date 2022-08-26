import React, { useState } from 'react'
import CardTitle from './common/CardTitle'
import Input from './common/Input'
import Button from './common/Button'

export default function Primero() {
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
        if(value ?? value !== "") {
            const number = Number(value)
            var h = Math.floor(number / 3600)
            var m = Math.floor(number % 3600 / 60)
            var s = Math.floor(number % 3600 % 60)
            setCalculatedValue(`${h}:${m}:${s}`)
        } else {
            setCalculatedValue("")
        }
    }

  return (
    <div>
        <CardTitle value={"Calculadora de Tiempo"}/>
        <Input value={value} label="Número de segundos" placeholder="Ingresa la cantidad de segundos" type="number" min={"0"} onChange={onChangeInput}/>
        <Input readonly value={calculatedValue} label="Resultado" type="text"/>
        <Button label="Presióname para calcular" onClick={onClickButton}/>
    </div>
  )
}
