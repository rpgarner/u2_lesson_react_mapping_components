import React from 'react'

const RightSidebar = (props) => {

  return (
    <div className="right">
      <h1>Countries</h1>
      {props.children}
    </div>
  )
}

export default RightSidebar
