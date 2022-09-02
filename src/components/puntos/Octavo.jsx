import React, { useState, useEffect } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'
import Message from '../common/Message'

export default function Octavo() {
    const [arrayNumbers, setArrayNumbers] = useState([])
    const [valuePosition, setValuePosition] = useState("0")
    const [error, setError] = useState(false)
    const [numberValue, setNumberValue] = useState("")

    useEffect(()=>{
        const array = []
        for (let i=0; i<10; i++) {
            array.push(Math.round(Math.random() * 10))
        }
        setArrayNumbers(array)
    }, [])

    const onClickButton = () => {
        if(valuePosition >= 0 && valuePosition < 10){
            setError(false)
            return setNumberValue(arrayNumbers[valuePosition])
        }
        setValuePosition("0")
        setError(true)
    }

  return (
    <Card title={"8) Valores aleatorios"} description={"Digita la posición del arreglo que deseas ver y conócela."}>
        <Input value={valuePosition} label="Posición del arreglo" placeholder="Digita la posición del arreglo" type="number" onChange={(e)=>setValuePosition(Number(e.target.value))}/>
        <Button label="Presióname para calcular" onClick={onClickButton}/>
        {
                error ? 
                <h3 style={{color:"red", margin:"0px", fontWeight:"600", fontSize:"13px"}}>Debes digitar un número entre 0 y 9.</h3> 
                : <Message hide={numberValue === ""}>
                    {
                        numberValue ? <p>El número en la posición {valuePosition} es: {numberValue}</p> : ""
                    }
                </Message>
        }
    </Card>
  )
}
