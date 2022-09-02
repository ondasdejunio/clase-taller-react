import { React, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.css'

export default function Card(props) {
    const { title, description } = props
    const id = useRef(`button-${Math.random()}`)

  return (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <h2 className={styles.title} id={id.current}>{title}</h2>
        </div>
        <div className={styles.cardContent}>
            <p>{description}</p>
            {props.children}
        </div>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    title: undefined,
    description: undefined
}