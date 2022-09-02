import React, { useEffect, useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'
import Switch from '../common/Switch'

export default function Septimo() {
    const [value, setValue] = useState("")
    const [array, setArray] = useState([])
    const [arrayOriginal, setArrayOriginal] = useState([])
    const [conditionLength, setConditionLength] = useState(false)
    const [conditionIncrement, setConditionIncrement] = useState(false)

    useEffect(() => {
        if(array.length === 10){
            setConditionLength(true)
        }
    }, [array, conditionLength])

    const onClickButton = () => {
        if(value !== 0 && value !== ""){
            setArray([...array, value])
            setArrayOriginal([...arrayOriginal, value])
            setValue("")
        }
    }

    const onChangeSwitch = (bool) => {
        setConditionIncrement(bool)
        if(bool){
            const arrayIncremented = []
            array.map(salary => arrayIncremented.push(salary * 1.08))
            setArray(arrayIncremented)
        } else{
            setArray(arrayOriginal)
        }
    }

  return (
    <Card title={"7) Calculador de salarios"} description={"Guarda salarios y haz aumentos."}>
        {
            !conditionLength ? 
            <div style={{display:"flex", flexDirection:"column"}}>
                <Message>{`Faltan ${10 - array.length} para obtener la cantidad de salarios`}</Message>
                <Input value={value} label={`Salario no. ${array.length + 1}`} min={"0"} type="number" onChange={(e) => setValue(Number(e.target.value))}/>
                <Button label="Insertar" onClick={onClickButton}/>
            </div>
            :
            <div>
                <Switch value={conditionIncrement} label={"Aumento del 8%"} onChange={() => onChangeSwitch(!conditionIncrement)}/>
            </div>
        }
        
        <Message>
            <h3>Salarios registrados:</h3>
            <ol>
                {
                    array.map((number, i) => <li key={i}>{number}</li>)
                }
            </ol>
        </Message>
    </Card>
  )
}
