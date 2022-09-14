import React from "react"
import _ from "lodash"

const ErrorList = (props) => {
  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map((field) => {
      index++
      return (
        <div key={index}>
          {_.startCase(field)} {props.errors[field]}
        </div>
      )
    })
    return (
      <div className="callout alert">
        {listItems}
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList
