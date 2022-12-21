import React, { Component } from "react";
import axios from "axios";

export default class Collage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputerror: {
        error: "",
        message: "",
        name: "",
        address: "",
        city: "",
        state: "",
        phoneNo: "",
      },
      form: {
        id: "",
        name: "",
        address: "",
        city: "",
        state: "",
        phoneNo: "",
      },
    };
    if (this.props.match.params.cid) {
      this.get();
    }
  }


  changeState = (e) => {
    var data = {};
    data[e.target.name] = e.target.value;
    this.setState(data);
  }

  changeFormState = (e) => {
    var data = this.state["form"];
    data[e.target.name] = e.target.value;
    this.setState(data);
    this.setState({});
  }
 
  changeInputError = (name, value) => {
    var data = this.state["inputerror"];
    data[name] = value;
    this.setState(data);
  }

  getInputError = (name) => {
    var data = this.state["inputerror"];
    return data[name];
  }

  reset(event) {
    this.setState({
         form: {
        id: "",
        name: "",
        address: "",
        city: "",
        state: "",
        phoneNo: "",
      }
    });

    this.changeInputError("message", "");
    this.changeInputError("name", "");
    this.changeInputError("error", "");
    this.changeInputError("address", "");
    this.changeInputError("city", "");
    this.changeInputError("state", "");
    this.changeInputError("phoneNo", "");
}
  

  get() {
    let id = this.props.match.params.cid;
    axios
      .get("http://api.sunilos.com:9080/ORSP10/College/get/" + id)
      .then((res) => {
        console.log(res);
        this.setState({ form: res.data.result.data });
      });
  }

  save = (event) => {
    axios
      .post("http://api.sunilos.com:9080/ORSP10/College/save", this.state.form)
      .then((res) => {
        if (!res.data.success) {
          this.setState({ inputerror: res.data.result.inputerror });
        } else {
          this.changeInputError("message", "Data saved Successfully");
          this.changeInputError("name", "");
          this.changeInputError("error", "");
          this.changeInputError("address", "");
          this.changeInputError("city", "");
          this.changeInputError("state", "");
          this.changeInputError("phoneNo", "");
        }
      });
  }

  render() {
    return (
      <center>
        <div className="container my-5">
          {/* <h2> Add College</h2> */}
          {(() => {
                  if (this.props.match.params.cid) {
                    return (
  
                      <h2 style={{ marginRight:"81px"}}>Update College</h2>
                    )
                  }
  
                  if (!this.props.match.params.cid) {
                    return (
  
                      <h2 style={{ marginRight:"81px"}}>Add College </h2>
                    )
                  }
  
  
                })()
  
                }
  
  

          <h2 style={{ color: "green" }}>{this.state.inputerror.message}</h2>
          <table cellPadding="12">
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={this.state.form.name}
                    onChange={this.changeFormState}
                  />
                </td>
                <td style={{ color: "red" }}>{this.state.inputerror.name}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Phone No*(10 Digits)</th>
                <td>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    name="phoneNo"
                    value={this.state.form.phoneNo}
                    onChange={this.changeFormState}
                  />
                </td>
                <td style={{ color: "red" }}>
                  {this.state.inputerror.phoneNo}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Address</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    value={this.state.form.address}
                    onChange={this.changeFormState}
                  />
                </td>
                <td style={{ color: "red" }}>
                  {this.state.inputerror.address}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>City</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    value={this.state.form.city}
                    onChange={this.changeFormState}
                  />
                </td>
                <td style={{ color: "red" }}>{this.state.inputerror.city}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>State</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    name="state"
                    value={this.state.form.state}
                    onChange={this.changeFormState}
                  />
                </td>
                <td style={{ color: "red" }}>{this.state.inputerror.state}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button
              style={{ marginRight: "42px" }}
              className="btn btn-primary"
              onClick={(event) => {
                this.save(event);
              }}
            >
              Save
            </button>
            <button
              className="btn btn-primary"
              onClick={(event) => {
                this.reset(event);
              }}
            >
              reset
            </button>
          </div>
        </div>
      </center>
    );
  }
}
