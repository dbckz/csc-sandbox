import React from "react"
import PropTypes from "prop-types"

export default function Output(props) {
  return <div>{props.themes}</div>
}

Output.propTypes = {
  themes: PropTypes.array,
}
