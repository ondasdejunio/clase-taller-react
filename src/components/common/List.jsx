import { React, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './list.module.css'

export default function List(props) {
    const { title, arrayItems } = props
    const id = useRef(`button-${Math.random()}`)

  return (
    <div className={styles.container}>
        {
            arrayItems.length > 0 
            ? 
            <>
                <h3 className={styles.title}>{title}</h3>
                <ol className={styles.list}>{arrayItems.map((item, i) => <li key={i}>{item}</li>)}</ol>
            </>
            : <p>Esperando...</p>
        }
        
    </div>
  )
}

List.propTypes = {
    title: PropTypes.string,
    arrayItems: PropTypes.array
}

List.defaultProps = {
    title: undefined,
    arrayItems: []
}