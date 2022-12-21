import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Marks extends Component {
    
   
    constructor(props) {
        super(props);
        this.state = {
        inputError: {
        message: "",
        error: "",
      },
        
      id: "",
      rollNo: "",
      name: "",
      list: [],
    };
    this.search();
  }

  changeState = (e) => {
    var data = {};
    data[e.target.name] = e.target.value;
    this.setState(data);
  };
  changeInputError = (name, value) => {
    var data = this.state["inputError"];
    data[name] = value;
    this.setState(data);
  };
  search() {
    axios
      .post("http://api.sunilos.com:9080/ORSP10/Marksheet/search", this.state)
      .then((res) => {
        console.log(res.data.result.data);
        this.setState({ list: res.data.result.data });
      });
  }
  delete(id) {
    let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/delete/" + id;
    axios.get(url).then((res) => {
      this.changeInputError("message", "Data Deleted Successfully");
      this.changeInputError("error", "false");
      this.search();
    });
  }
  

  render() {
    return (
      <>
        <div className="container my-5" style={{marginLeft:"360px"}}>
          <input
            name="rollNo"
            placeholder="Search by RollNo"
            type="number"
            value={this.state.rollNo}
            onChange={(event) => this.changeState(event)}
          />
          &nbsp; &nbsp;
          <input
            name="name"
            placeholder="Search by Name"
            type="text"
            value={this.state.name}
            onChange={this.changeState}
          />
          &nbsp; &nbsp;
          <button type="button" onClick={(event) => this.search(event)}>
            Search
          </button>
        </div>
        <div>
          <table style={{ width: "1350px", margin: "46px 12px" }} className="table table-hover table-bordered border-success">
            <tbody >
              <tr className="table-dark">
                <th>Id</th>
                <th>RollNo</th>
                <th>Name</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Maths</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>

              {
              this.state.list.map((ele,i) => 
                          
                  (                                         
                  <tr key={i}>
                  <td>{i+1}</td>
                  <td>{ele.rollNo}</td>
                  <td>{ele.name}</td>
                  <td>{ele.physics}</td>
                  <td>{ele.chemistry}</td>
                  <td>{ele.maths}</td>
                  <td>
                    <button  
                      className="btn btn-primary"
                      onClick={(event) => this.delete(ele.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={"/marksheet/" + ele.id}>Edit</Link>
                  </td>
                </tr>
              ))}
            
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
