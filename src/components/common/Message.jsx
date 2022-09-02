import { React, useRef } from 'react'
import styles from './message.module.css'

export default function Message(props) {
    const id = useRef(`input-${Math.random()}`)

  return (
    <div className={styles.container} id={id.current}>
      <h1 className={styles.title}>Mensaje:</h1>
        {
          props.children && props.children !== "" ? props.children : <p>Esperando...</p>
        }
      </div>
  )
  
}