import { React, useRef } from 'react'
import PropTypes from 'prop-types'

export default function CardTitle(props) {
    const { value } = props
    const id = useRef(`title-${Math.random()}`)

  return (
      <h2 id={id.current}>{value}</h2>
  )
}

CardTitle.propTypes = {
    value: PropTypes.string,
}

CardTitle.defaultProps = {
    value: undefined,
}