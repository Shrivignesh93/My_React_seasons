import React from 'react'

const Spinner = props => {
  return(
    <div>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
    </div>
  )
}

//Spinner component is basically a reusable component, a person may sometime while reusing in multiple
//places may fail to send a message prop so in that case we make of this default props
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner