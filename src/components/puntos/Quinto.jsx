import React, { useEffect, useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'
import List from '../common/List'

export default function Quinto() {
    const [value, setValue] = useState("")
    const [arrayOrdered, setArrayOrdered] = useState([])
    const [arrayUnordered, setArrayUnordered] = useState([])

    const onClickButton = () => {
        var temp = [...arrayUnordered, value]
        setArrayUnordered(temp)
        temp = temp.sort((a, b) => a - b)
        setArrayOrdered(temp)
        setValue("")
    }

    return (
        <Card title={"5) El organizador"} description={"Un número y él sabrá cómo ordenarlo en su lista."}>
            <Input value={value} label="Inserta tu número" type="number" onChange={(e) => setValue(Number(e.target.value))} />
            <Button label="Presióname" onClick={onClickButton} />
            <Message hide={arrayOrdered.length === 0}>
                <List title={"Listado"} arrayItems={arrayOrdered} />
            </Message>
        </Card>
    )
}
