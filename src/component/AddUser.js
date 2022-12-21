import axios from "axios";
import Base from "./Base";
import FormError from "./FormError";
import FormMessage from "./FormMessage";

export default class AddUser extends Base {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: "",
        message: "",
        firstName: "",
        lastName: "",
        loginId: "",
        roleId: "",
      },
      form: {
        firstName: "",
        lastName: "",
        loginId: "",
        password: "",
        roleId: "",
      },
    };
    if (this.props.match.params.ajay) {
      this.getdata();
    }
  }
  reset() {
    this.setState({
      form: {
        firstName: "",
        lastName: "",
        password: "",
        loginId: "",
        roleId: "",
      },
    });
    this.changeInputError("message", "");
          this.changeInputError("error", "");
          this.changeInputError("firstName", "");
          this.changeInputError("lastName", "");
          this.changeInputError("loginId", "");
          this.changeInputError("roleId", "");
  }
  getdata() {
    let id = this.props.match.params.ajay;
    axios
      .get("http://api.sunilos.com:9080/ORSP10/User/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });
      });
  }

  save() {
    axios
      .post("http://api.sunilos.com:9080/ORSP10/User/save/", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        } else {
          this.changeInputError("message", "Data save successfully");
          this.changeInputError("error", "false");
          this.changeInputError("firstName", "");
          this.changeInputError("lastName", "");
          this.changeInputError("loginId", "");
          this.changeInputError("roleId", "");
        }
      });
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="container text-center">
            {(() => {
              if (this.props.match.params.ajay) {
                return <h2>Update User</h2>;
              }

              if (!this.props.match.params.ajay) {
                return <h2 style={{marginRight:"145px"}}>Student Registration</h2>;
              }
            })()}

            <div style={{ height: "50px" }}>
              
              <FormMessage
                error={this.getInputError("error")}
                message={this.getInputError("message")}
              />
            </div>

            <div
              style={{ padding: "10px 0px" }}
              className="row justify-content-md-center"
            >
              <div className="col text-end fw-bold">FirstName:</div>
              <div className="col-6 text-start col-lg-3">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.form.firstName}
                  onChange={this.changeFormState}
                  size={20}
                />
              </div>
              <div className="col text-start">
                <FormError errorName={this.getInputError("firstName")} />
              </div>
            </div>
            <div
              style={{ padding: "10px 0px" }}
              className="row justify-content-md-center"
            >
              <div className="col text-end fw-bold">LastName:</div>
              <div className="col-6 text-start col-lg-3">
                <input
                  type="text"
                  name="lastName"
                  value={this.state.form.lastName}
                  onChange={this.changeFormState}
                  size={20}
                />
              </div>
              <div className="col text-start">
                <FormError errorName={this.getInputError("lastName")} />
              </div>
            </div>
            <div
              style={{ padding: "10px 0px" }}
              className="row justify-content-md-center"
            >
              <div className="col text-end fw-bold">LoginId:</div>
              <div className="col-6 text-start col-lg-3">
                <input
                  type="text"
                  name="loginId"
                  value={this.state.form.loginId}
                  onChange={this.changeFormState}
                  size={20}
                />
              </div>

              <div className="col text-start">
                <FormError errorName={this.getInputError("loginId")} />
              </div>
            </div>
            <div
              style={{ padding: "10px 0px" }}
              className="row justify-content-md-center"
            >
              <div className="col text-end fw-bold">password:</div>
              <div className="col-6 text-start col-lg-3">
                <input
                  type="password"
                  name="password"
                  value={this.state.form.password}
                  onChange={this.changeFormState}
                  size={20}
                />
              </div>

              <div className="col text-start">
                <FormError errorName={this.getInputError("password")} />
              </div>
            </div>
            <div
              style={{ padding: "10px 0px" }}
              className="row justify-content-md-center"
            >
              <div className="col text-end fw-bold">RoleId:</div>
              <div className="col-6 text-start col-lg-3">
                <input
                  type="number"
                  name="roleId"
                  value={this.state.form.roleId}
                  onChange={this.changeFormState}
                  size={20}
                />
              </div>
              <div className="col text-start">
                <FormError errorName={this.getInputError("roleId")} />
              </div>
            </div>
            <div
              style={{ padding: "10px 0px" }}
              className="row justify-content-md-center"
            >
              <div className="col text-end fw-bold"></div>
              <div
                className="col-6 text-center col-lg-3"
                style={{ marginRight: "119px" }}
              >
                <button
                  style={{ marginRight: "44px" }}
                  className="btn btn-primary"
                  onClick={(event) => this.save(event)}
                >
                  Add User
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(event) => this.reset(event)}
                >
                  reset
                </button>
              </div>
              <div className="col text-start"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
