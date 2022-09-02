import React, { useState } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'
import Message from '../common/Message'

export default function Tercero() {
    const [name, setName] = useState("")
    const [hours, setHours] = useState("")
    const [message, setMessage] = useState("")

    const onClickButton = () => {
        if(name !== "") {
            const hourValue = Number(hours.split(":")[0])
            if(hourValue >= 1 && hourValue < 12){
                setMessage(`¡Buenos días, ${name}!`)
            }
            else if(hourValue >= 12 && hourValue <= 18) {
                setMessage(`¡Buenas tardes, ${name}!`)
            }
            else if(hourValue > 18 && hourValue <= 24) {
                setMessage(`¡Buenas noches, ${name}!`)
            }
        } else {
            setMessage("Debes escribir tu nombre 💀💀💀")
        }
    }

  return (
    <Card title={"3) Saludador 3000"} description={"Escribe tu nombre y recibe un lindo saludo."}>
        <Input value={name} label="Escribe tu nombre" placeholder="Isabella Castillo" type="text" onChange={(e) => setName(e.target.value)}/>
        <Input value={hours} label="Digita la hora" placeholder="4:00" type="time" onChange={(e) => setHours(e.target.value)}/>
        <Button label="Saludar" onClick={onClickButton}/>
        <Message hide={message === ""}>{message}</Message>
    </Card>
  )
}
