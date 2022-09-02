import React, { useState, useEffect } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'
import Message from '../common/Message'

export default function Once() {
    const [studentDetails, setStudentDetails] = useState({})
    const [name, setName] = useState("")
    const [grades, setGrades] = useState([0, 0, 0])
    const [message, setMessage] = useState("")
    const [showMessage, setShowMessage] = useState(false)

    useEffect(()=>{
        if(name !== ""){
            if(studentDetails.gano){
                return setMessage(`¡Hola ${studentDetails.name}, ganaste el año!`)
            }
            return setMessage(`¡Hola ${studentDetails.name}, perdiste el año!`)
        }
    }, [studentDetails, message])

    const onClickButton = () => {
        if(name !== ""){
            if((grades[0] + grades[1] + grades[2] / 3) > 3 ){
                setStudentDetails({name: name, grades: grades, gano: true})
            } else {
                setStudentDetails({name: name, grades: grades, gano: false})
            }
            
        } else {
            console.log('paso aqui')
            setMessage("Escribe tu nombre. 💀💀💀")
        }
        setShowMessage(true)
    }

  return (
        <Card title={"11) Conoce tu nota"} description={"Crea tu propia tabla con diferentes tamaños."}>
        <Input value={name} label="Nombre del estudiante" placeholder="Juanito Pérez" type="text" onChange={(e)=>setName(e.target.value)}/>
        <Input value={grades[0]} label="Nota 1" placeholder="Pon tu nota no. 1" type="number" onChange={(e)=>setGrades([Number(e.target.value), grades[1], grades[2]])}/>
        <Input value={grades[1]} label="Nota 2" placeholder="Pon tu nota no. 2" type="number" onChange={(e)=>setGrades([grades[0], Number(e.target.value), grades[2]])}/>
        <Input value={grades[2]} label="Nota 3" placeholder="Pon tu nota no. 3" type="number" onChange={(e)=>setGrades([grades[0], grades[1], Number(e.target.value)])}/>
        <Button label="Presióname para calcular" onClick={onClickButton}/>
        <Message hide={!showMessage}>
            {<p>{message}</p>}
        </Message>
        </Card>
  )
}
