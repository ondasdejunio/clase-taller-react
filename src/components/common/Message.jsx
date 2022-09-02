import { React, useRef } from 'react'
import styles from './message.module.css'
import PropTypes from 'prop-types'

export default function Message(props) {
    const { hide } = props
    const id = useRef(`input-${Math.random()}`)

  return (
    <div className={styles.container} style={hide ? {display:"none"} : {display:"block"}} id={id.current}>
      <h1 className={styles.title}>Mensaje:</h1>
        {
          props.children && props.children !== "" ? props.children : <p>Esperando...</p>
        }
      </div>
  )  
}

Message.propTypes = {
  hide: PropTypes.bool,
}

Message.defaultProps = {
  hide: false,
}