import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class collagelist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: "",
                error: '',
              },

            id: '',
            name:'',
            address:'',
            city:'',
            state:'',
            phoneNo:'',
            list: []
        };
         this.search();
    }
   
    changeState = (e) => {
        var data={};
        data[e.target.name]=e.target.value;
        this.setState(data);
    }
    changeInputError=( name,value)=>{
        var data=this.state["inputError"];
        data[name]=value;
        this.setState(data);
    }
    search() {
        axios.post('http://api.sunilos.com:9080/ORSP10/College/search',this.state)
        .then((res) => {
            this.setState({ list: res.data.result.data });   
           // http://api.sunilos.com:9080/ORSP10/College/search      
           
        });
  
    }
    delete(id) {
        let url = "http://api.sunilos.com:9080/ORSP10/College/delete/" + id;
        axios.get(url).then((res) => {
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.search();
        });
    }

  render() {
    return (
        <>

        <div className='container my-5'style={{marginLeft:"360px"}}>
             <input name="rollNo" placeholder='Search by RollNo'  type="number" 
                value={this.state.rollNo}
                onChange={(event) => this.changeState(event)} />
                 &nbsp; &nbsp;
             <input name="name" placeholder='Search by Name' type="text" 
                value={this.state.name}
                onChange={this.changeState} />
                &nbsp; &nbsp;
                <button type='button' onClick={(event) => this.search(event)}>Search</button>
        </div>
      <div>

           <table style={{ width: "1350px", margin: "46px 12px" }} className="table  table-hover table-bordered border-success">
                        <thead   >
                            <tr className= "table-dark">
                                <th>Id</th>
                                <th>Name</th>
                                <th>address</th>
                                <th>city</th>
                                <th>phoneNo</th>
                                <th>state</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list.map((ele, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.address}</td>
                                        <td>{ele.city}</td>
                                        <td>{ele.phoneNo}</td>
                                        <td>{ele.state}</td>
                                        <td><button className='btn btn-primary' onClick={(event) => this.delete(ele.id)}>Delete</button></td>
                                        <td><Link to={'/college/'+ele.id} >Edit</Link></td>



                                       
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
      </div>
        </>
    )
  }
}
