import React, { useState } from 'react'
import Card from '../common/Card'
import Input from '../common/Input'
import Button from '../common/Button'
import Message from '../common/Message'

export default function Doce() {
    const [studentsDetails, setStudentsDetails] = useState([
        { name: "Juan Pérez", grades: [0, 0, 0], winned:undefined },
        { name: "Margarita M.", grades: [0, 0, 0], winned:undefined }])
    let studentsDetailsCopy = [...studentsDetails]
    const [results, setResults] = useState([])

    const onChangeName = (key, value) => {
        studentsDetailsCopy[key].name = value
        setStudentsDetails(studentsDetailsCopy)
    }

    const onChangeGrade = (key, grade, value) => {
        studentsDetailsCopy[key].grades[grade] = value
        setStudentsDetails(studentsDetailsCopy)
    }

    const onClickButton = () => {
        const resultados = []
        studentsDetails.map((student, key) => {
            const result = ((student.grades.reduce((a, b) => a + b, 0)) / student.grades.length).toFixed(2)
            if(result >= 3) {
                studentsDetailsCopy[key].winned = true
                return resultados[key] = `El estudiante ${student.name} ganó el año con una nota de ${result}`
            }
            studentsDetailsCopy[key].winned = false
            return resultados[key] = `El estudiante ${student.name} perdió el año con una nota de ${result}`
        })
        setResults(resultados)
        setStudentsDetails(studentsDetailsCopy)
    }

    return (
        <Card title={"12) Notas estudiantiles"} description={"Listado de notas de estudiantes"}>
            {
                studentsDetails.map((student, key) => {
                    return <div style={{margin:"5px", backgroundColor:"#fff9e8", border:"1px solid black"}} key={key}>
                        <Input value={student.name} label="Nombre del estudiante" placeholder="Juanito Pérez" type="text" onChange={(e) => onChangeName(key, e.target.value)} />
                        <Input value={student.grades[0]} label="Nota 1" placeholder="Pon tu nota no. 1" min={"0"} type="number" onChange={(e) => onChangeGrade(key, 0, Number(e.target.value))} />
                        <Input value={student.grades[1]} label="Nota 2" placeholder="Pon tu nota no. 2" min={"0"} type="number" onChange={(e) => onChangeGrade(key, 1, Number(e.target.value))} />
                        <Input value={student.grades[2]} label="Nota 2" placeholder="Pon tu nota no. 3" min={"0"} type="number" onChange={(e) => onChangeGrade(key, 2, Number(e.target.value))} />
                    </div>
                })
            }

            <Button label="Presióname para calcular" onClick={onClickButton} />
            <Message hide={results.length === 0}>
                {
                results.map((result, i) => {
                    return <p key={i}>{result}</p>
                })
                }
            </Message>
        </Card>
    )
}
