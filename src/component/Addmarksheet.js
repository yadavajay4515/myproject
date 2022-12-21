
import axios from 'axios';
import React, { Component } from 'react'
import { FcCheckmark} from "react-icons/fc";

export default class Addmarksheet extends Component {
  constructor(props){
    super(props);
    this.state={
      inputError:{
          id:'',
          rollNo: '',
          name: '',
          physics: '',
          chemistry: '',
          maths: '',
          studentId: '',
          message: '',
          error: ''
      },
    
      form :{
      id:'',
      rollNo:'',
      name:'',
      physics:'',
      chemistry:'',
      maths:'',
      studentId:''
  },
 
  list:[]
   }  
   
  
   if (
    this.props.match.params.pid) {
    this.get();
  }
  
  }
  reset=()=>{
    this.setState({
      form :{
        id:'',
        rollNo:"",
        name:'',
        physics:'',
        chemistry:'',
        maths:'',
        studentId:''
    }
    });
    this.changeInputError("message", "");
    this.changeInputError("id", "")
    this.changeInputError("rollNo", "")
    this.changeInputError("name", "")
    this.changeInputError("physics", "")
    this.changeInputError("chemistry", "")
    this.changeInputError("maths", "")
    this.changeInputError("studentId", "")

  }
  
  get() {
    let id = this.props.match.params.pid;
    var url = "http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + id;
    axios.get(url).then((res) => {
    this.setState({ form: res.data.result.data });
    });
  }
  changestate=(event)=>{
    var data=this.state["form"];
    data[event.target.name]=event.target.value;
    this.setState(data);
}
changeInputError=( name,value)=>{
    var data=this.state["inputError"];
    data[name]=value;
    this.setState(data);
}
// getInputError=( name)=>{
//     var data=this.state["inputError"];
//     return data[name];    
// }



 save=(event)=>{     
    axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/save",this.state.form)
    .then((response)=>{
      // console.log(response.data.result.data);
      // this.setState({list:response.data.result.data});
     
      if (!response.data.success) {
        this.setState({ inputError: response.data.result.inputerror });
        this.changeInputError("error", "true");
      } 
      else {
        this.changeInputError("error", "false")
        this.changeInputError("message", "Data saved Successfully");
          this.changeInputError("id", "")
          this.changeInputError("rollNo", "")
          this.changeInputError("name", "")
          this.changeInputError("physics", "")
          this.changeInputError("chemistry", "")
          this.changeInputError("maths", "")
          this.changeInputError("studentId", "")                 
         
          }        
    }).catch((err)=>{
        console.log(err);
        
    });

 }

 


  render() {
     return (
        <>
      <div  className="my-3" id="data" >
                <center>

               
                
                {(() => {
                  if (this.state.inputError.message) {
                    return (
  
                    
                      <h2 style={{color:"green"}}>{this.state.inputError.message}<FcCheckmark/></h2>
                    )
                  }
   
                })()
  
                }
                 {(() => {
                if (this.props.match.params.pid) {
                  return (

                    <h2 style={{marginLeft:'0px',marginTop:"20px"}}>Update Marksheet</h2>
                  )
                }

                if (!this.props.match.params.pid) {
                  return (

                    <h4 style={{marginLeft:'0px',marginTop:"20px"}}>Add Marksheet</h4>
                  )
                }


              })()

              }
             
  
                <table cellPadding="15">
                  <tbody>
                 <tr>
                    <th>Roll No</th>
                    <td> <input type="number" placeholder="Enter Roll No" name='rollNo' value={this.state.form.rollNo} onChange={this.changestate}/></td>
               <td><h5 style={{color:"red"}}>{this.state.inputError.rollNo}</h5></td>
                </tr>
              

               </tbody> 
             
                  <tbody>
                 <tr>
                    <th>Name</th>
                    <td> <input type="text" placeholder="Enter Name" name='name' value={this.state.form.name} onChange={this.changestate}/></td>
                <td><h5 style={{color:"red"}}>{this.state.inputError.name}</h5></td>
                </tr>
                  </tbody>
                  <tbody>
                 <tr>
                    <th>physics</th>
                    <td><input type="number" placeholder="Physics number"name='physics' value={this.state.form.physics} onChange={this.changestate}/></td>
                <td><h5 style={{color:"red"}}>{this.state.inputError.physics}</h5></td>
                </tr>
                  </tbody>
                  <tbody>
                <tr>
                    <th>Chemistry</th>
                    <td><input type="number"placeholder="Chemistry number" name='chemistry' value={this.state.form.chemistry} onChange={this.changestate} />  </td>
                <td><h5 style={{color:"red"}}>{this.state.inputError.chemistry}</h5></td>
              
                </tr>
                  </tbody>
                  <tbody>
                <tr>
                    <th>Maths</th>
                    <td> <input type="number"placeholder="Maths Number" name='maths' value={this.state.form.maths} onChange={this.changestate}/> </td>
                <td><h5 style={{color:"red"}}>{this.state.inputError.maths}</h5></td>
               
                </tr>
                  </tbody>
                  <tbody>
                <tr>
                    <th>StudentId</th>
                    <td> <input type="number" placeholder=" Enter studentId"name='studentId' value={this.state.form.studentId} onChange={this.changestate}/> </td>
                <td><h5 style={{color:"red"}}>{this.state.inputError.studentId}</h5></td>
               
                </tr>
                  </tbody>
                
                  <tbody>
                <tr>
                    <td style={{textAlign:"center"}}>
                      <button  onClick={(event)=>{this.save(event)}}  className="btn btn-primary" >save</button>
                       </td>
                       <td >
                      <button  onClick={(event)=>{this.reset(event)}}  className="btn btn-primary" >reset</button>
                       </td>
                </tr>
                  </tbody>
             </table> 
             
        </center>

      </div>
        </>
    )
  }
}
