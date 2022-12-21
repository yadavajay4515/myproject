import axios from "axios";
import Base from "./Base"
import { Link } from "react-router-dom";
export default class UserList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: ''
            },

            firstName:'',
            lastName:'',
            loginId:'',
            roleId:'',
            list: []
        }
        this.search();
    }
    search() {
        axios.post("http://api.sunilos.com:9080/ORSP10/User/search/", this.state)
            .then((res) => {
                // console.log(res);
                this.setState({ list: res.data.result.data });
            });
    }
    delete(id)
 {
        let url = "http://api.sunilos.com:9080/ORSP10/User/delete/" + id;
        axios.get(url).then((res) => {
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.search();
        });
    }



    render() {
        return (
            <>
                <div className="container overflow-hidden text-center my-5">
                    <div className="row gx-2">
                        <div className="col text-end">
                            <div className="p-3 ">  <input name="loginId" type="number" placeholder='Search by loginId'
                                value={this.state.loginId}
                                onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className="col text-start">
                            <div className="p-3 "><input name="roleId" placeholder='Search by roleId' type="number"
                                value={this.state.roleId}
                                onChange={this.changeState} /> &nbsp; &nbsp;
                                <button type='button'
                                    onClick={(event) => this.search(event)}>Search</button></div>
                        </div>

                    </div>
                </div>
                <table style={{ width: "1350px", margin: "46px 12px" }} className="table table-hover table-bordered border-success">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>

                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">LoginId</th>
                            <th scope="col">RoleId</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{i+1}</td>

                                <td>{ele.firstName}</td>
                                <td>{ele.lastName}</td>
                                <td>{ele.loginId}</td>
                                <td>{ele.roleId}</td>
                               
                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                <td><Link to={'/userlist/' + ele.id}>Edit</Link></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}