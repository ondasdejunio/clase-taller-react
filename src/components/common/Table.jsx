import { React, useRef } from 'react'
import PropTypes from 'prop-types'
import "./table.css"

export default function Table(props) {
    const { arrayRow, arrayCol, showSum, arraySum } = props
    const id = useRef(`input-${Math.random()}`)

  return (
      <div id={id.current} className=''>
            <table>
            <tbody>
                {
                    arrayRow.map((i, position) => {
                        return(
                            <tr key={i}>
                                {
                                    arrayCol.map((x) => {
                                        return(
                                                <th key={x}>{showSum && position===(arrayRow.length-1) ? `Total: ${arraySum[x-1]}`: `(${i}, ${x}) Valor: ${i + x}`}</th>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
      </div>
  )
}

Table.propTypes = {
    arrayRow: PropTypes.array,
    arrayCol: PropTypes.array,
    showSum: PropTypes.bool,
    arraySum: PropTypes.array,
}

Table.defaultProps = {
    arrayRow: [],
    arrayCol: [],
    showSum: false,
    arraySum: [],
}