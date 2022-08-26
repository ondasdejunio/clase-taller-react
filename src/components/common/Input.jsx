import { React, useRef } from 'react'
import PropTypes from 'prop-types'

export default function Input(props) {
    const { readonly, min, value, label, placeholder, type, onChange } = props
    const id = useRef(`input-${Math.random()}`)

  return (
      <div className=''>
        <label htmlFor={id.current}>{label}</label>
        <input readOnly={readonly} id={id.current} type={type} min={min} value={value} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} />
      </div>
  )
}

Input.propTypes = {
    readonly: PropTypes.bool,
    min: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.string]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

Input.defaultProps = {
    readonly: undefined,
    min: undefined,
    value: undefined,
    label: undefined,
    placeholder: undefined,
    type: undefined,
    onChange: undefined
}