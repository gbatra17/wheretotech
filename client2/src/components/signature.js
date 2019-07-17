import React from "react"

const Signature = props => (
  <>
    <span style={{ color: "#0f0" }}>mymacbook</span>:&nbsp;
    <span style={{ color: "#0bc" }}>{props.directory}</span>
    <span style={{ color: "#ff0096" }}>&nbsp;$</span>
  </>
)

export default Signature
