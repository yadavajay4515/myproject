import React, { Component } from 'react'


export default class FormMessage extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.message)
    
  }
  render() {
    return (
      <>
        {(() => {
          if (this.props.error === "true") {
            return (
              <h3 style={{ color: "red" }}>{this.props.message}</h3>
            )
          }
          if (this.props.error === "false") {
            return (
              <h5 style={{ color: "green" }}>{this.props.message}</h5>
              
                
              
            )
          }
        })()}
      </>
    )
  }
}
