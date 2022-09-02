import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'
import Table from '../common/Table'

export default function Noveno() {
    const [valueRow, setValueRow] = useState("")
    const [valueColumn, setValueColumn] = useState("")
    const [arrayRow, setArrayRow] = useState([])
    const [arrayCol, setArrayCol] = useState([])

    const onClickButton = () => {
        const arrayR = []
        for(let i = 0; i < valueRow; i++){
            arrayR.push(i+1)
        }
        setArrayRow(arrayR)

        const arrayC = []
        for(let i = 0; i < valueColumn; i++){
            arrayC.push(i+1)
        }
        setArrayCol(arrayC)
    }

  return (
    <Card title={"9) Tabla personalizada"} description={"Crea tu propia tabla con diferentes tamaños."}>
        <Input value={valueRow} label={"Número de filas"} min={"0"} type="number" onChange={(e) => setValueRow(Number(e.target.value))}/>
        <Input value={valueColumn} label={"Número de columnas"} min={"0"} type="number" onChange={(e) => setValueColumn(Number(e.target.value))}/>
        <Button label="Presionar" onClick={onClickButton}/>
        
        <Message>
            <h3>Tu nueva tabla:</h3>
            <Table arrayRow={arrayRow}  arrayCol={arrayCol}/>
        </Message>
    </Card>
  )
}
