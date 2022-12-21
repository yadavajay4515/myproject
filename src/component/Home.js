import React, { Component } from 'react'


export default class Home extends Component {

    
    constructor(props) {
        super(props);
        this.userList = [
            { "id": 1, "name": "One" },
            { "id": 2, "name": "Two" },
            {"id":3, "name":"three"}
        ]
    }
   


  render() {
    return (
      <div>
         <table className="table table-bordered table-success mt-5">
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
     
    </tr>
  </thead>
  {
    this.userList.map((element)=>(
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{element.id}</td>
      <td>{element.name}</td>
      
    </tr>
   
  </tbody>
    ))
  }
</table>
      </div>
    )
  }
}
