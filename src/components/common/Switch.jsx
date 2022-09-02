import { React, useRef } from 'react'
import PropTypes from 'prop-types'

export default function Switch(props) {
    const { readonly, value, label, onChange } = props
    const id = useRef(`input-${Math.random()}`)

  return (
      <div className=''>
        <label htmlFor={id.current}>{label}</label>
            <input value={value} readOnly={readonly} id={id.current} onChange={(e) => onChange && onChange(e)} type="checkbox"/>
      </div>
      
  )
}

Switch.propTypes = {
    readonly: PropTypes.bool,
    value: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func
}

Switch.defaultProps = {
    readonly: undefined,
    value: undefined,
    label: undefined,
    onChange: undefined
}