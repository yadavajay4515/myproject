import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Nextpage from "./Nextpage";
import Base from "./Base";
// import FormError from "./FormError";
// import FormMessage from "./FormMessage";
// import { TbLogin } from "react-icons/tb";
// import './xyz.css';

export default class Login extends Base {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        message: "",
        loginId: "",
        password: "",
      },
      form: {
        loginId: "",
        password: "",
      },
    };
  }
  reset() {
    this.setState({
      form: {
        loginId: "",
        password: "",
      },
    });
    this.changeInputError("message", "");
    this.changeInputError("error", "");
    this.changeInputError("loginId", "");
    this.changeInputError("password", "");
  }
  changeState = (e) => {
    var data = this.state["form"];
    data[e.target.name] = e.target.value;
    this.setState(data);
    this.setState({});
  };
  changeStateValue(name, value) {
    this.setState({ [name]: value });
  }
  login() {
    axios
      .post("http://api.sunilos.com:9080/ORSP10/Auth/login", this.state.form)
      .then((res) => {
        
        if (res.data.success === true) {
          localStorage.setItem("name",res.data.result.data.name); 
          alert("login successfully");
          
          ReactDOM.render(
            <React.StrictMode>
              <Nextpage />
              
            </React.StrictMode>,
            document.getElementById("root")
          );
        }
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        }
         else {
          this.changeInputError("message", "invalid id password");
          this.changeInputError("error", "false");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
        }
       
      });
  }

  render() {
    return (
      <>
        <center>
          <div id="data">
            <form>

              <h2
                style={{
                  borderRadius: "16px",
                  display: "inline-block",
                  width: "25%",
                }}
                >
                Login
                {/* <TbLogin /> */}
              </h2>
                <h3 style={{color:'red'}}>{this.state.inputError.message}</h3>

              <table cellPadding="15">
                <tbody>
                  <tr>
                    <td>Enter Email Id:</td>
                    <td style={{ width: "61%" }}>
                      <input
                        type="text"
                        id="t1"
                        placeholder="Enter email Id"
                        name="loginId"
                        value={this.state.form.loginId}
                        onChange={(event) => this.changeFormState(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{
                        textAlign: "center",
                        padding: "0px 0px",
                        color: "rgb(195 26 45)",
                      }}
                    >
                    
                      {this.state.inputError.loginId}
                    </td>
                  </tr>

                  <tr>
                    <td>Enter Password:</td>
                    <td>
                      <input
                        type="password"
                        id="t1"
                        placeholder="Enter Password"
                        name="password"
                        value={this.state.form.password}
                        onChange={(event) => this.changeFormState(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{
                        textAlign: "center",
                        padding: "0px 0px",
                        color: "rgb(195 26 45)",
                      }}
                    >
                      
                      {this.state.inputError.password}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        onClick={(event) => this.login(event)}
                        className="btn btn-primary"
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        onClick={(event) => this.reset(event)}
                        className="btn btn-primary"
                        style={{ marginLeft: "20px" }}
                      >
                        reset
                      </button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </center>
      </>
    );
  }
}
