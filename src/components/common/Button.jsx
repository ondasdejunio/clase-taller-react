import { React, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

export default function Button(props) {
    const { label, onClick } = props
    const id = useRef(`button-${Math.random()}`)

  return (
      <button className={styles.button} id={id.current} onClick={(e) => onClick && onClick()}>{label}</button>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    label: undefined,
    onClick: undefined
}