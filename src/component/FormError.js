import React, { Component } from 'react'

export default class FormError extends Component {
    constructor(props){
        super(props);
        console.log(this.props.errorName);

    }
  render() {
    return (
      <>
        {(()=>{
                return(
                <h5  style={{color:"red"}}>{this.props.errorName}</h5>
                )
                   })()}
      </>
    )
  }
}
