import React, { useEffect, useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import Message from '../common/Message'

export default function Quinto() {
    const [value, setValue] = useState("")
    const [arrayOrdered, setArrayOrdered] = useState([])
    const [arrayUnordered, setArrayUnordered] = useState([])

    const onClickButton = () => {
        setArrayUnordered([...arrayUnordered, value] )
        setArrayOrdered(arrayUnordered.sort((a, b)=> a - b))
        setValue("")
    }

  return (
    <Card title={"5) El organizador"} description={"Un número y él sabrá cómo ordenarlo en su lista."}>
        <Input value={value} label="Inserta tu número" type="number" onChange={(e) => setValue(Number(e.target.value))}/>
        <Button label="Presióname" onClick={onClickButton}/>
        <Message>
            <ol>
                {
                    arrayOrdered.map((number, i) => <li key={i}>{number}</li>)
                }
            </ol>
        </Message>
    </Card>
  )
}
