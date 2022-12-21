import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";

export default class Registration extends Base {

    constructor(props){
        super(props);
        this.state={
            inputError:{
                error:'',
                message:'',
                firstName:'',
                lastName:'',
                 email:'',
                mobileNo:'',
                collegeId:''


            },
            form:{
              firstName:'',
              lastName:'',
              email:'',
                mobileNo:'',
                collegeId:''
            }
        }
        if (this.props.match.params.sid) {
            this.getdata();
      
          }
      
    }
    reset(){
      this.setState({
        form:{
          firstName:'',
          lastName:'',
          loginId:'',
          roleId:'',
          collegeId:''
           
        }
      })
      this.changeInputError("firstName","");
      this.changeInputError("lastName","");
      this.changeInputError("mobileNo","");
      this.changeInputError("email","");
      this.changeInputError("collegeId","");

    }
    getdata() {
        let id = this.props.match.params.sid;
        axios.get("http://api.sunilos.com:9080/ORSP10/Student/get/" + id)
          .then((res) => {
            this.setState({ form: res.data.result.data });
    
          })
      }


    save(){
        axios.post("http://api.sunilos.com:9080/ORSP10/Student/save",this.state.form)
        .then((res)=>{
            console.log(res);
            if(res.data.result.inputerror){

                this.setState({inputError:res.data.result.inputerror});
                this.changeInputError("error","true");
            }
            else{
                this.changeInputError("message","Data save successfully");
                this.changeInputError("error","false");
                this.changeInputError("firstName","");
                this.changeInputError("lastName","");
                this.changeInputError("mobileNo","");
                this.changeInputError("email","");
                this.changeInputError("collegeId","");
                


            }

        });
    }
  render() {
    return (
      <>
      
      {(()=>{if(this.state.inputError.message){
              return(
                
            <div style={{height: "52px",marginTop: "1px"}} className="alert alert-success" role="alert">

              <div > <FormMessage error={this.getInputError("error")} message={this.getInputError('message')} /> </div>
            </div>
              )

            }
            })()
            }
          <center>
          <div id="data">
          <form>
          {(() => {
              if (this.props.match.params.sid) {
                return (

                  <h2>Update Student</h2>
                )
              }

              if (!this.props.match.params.sid) {
                return (

                    <h4> Student Registration </h4>
                )
              }


            })()

            }
           
       
        
         
          <table cellPadding="15" > 
          <tbody>

          <tr>
          <td>FirstName:</td>
          <td style={{width:"73%"}}>
          <input type="text" id="t1" placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState}/>
          </td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError errorName={this.getInputError('firstName')} /></td>          
          </tr>
          
          <tr>
          <td>LastName:</td>
          <td><input type="text" id="t1"  placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError errorName={this.getInputError('lastName')} /></td>          
          </tr>
          <tr>
          <td>email:</td>
          <td><input type="email" id="t1"  placeholder="Enter emailaddress" name="email" value={this.state.form.email} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}><FormError errorName={this.getInputError('email')} /></td>          
          </tr>
          
          <tr>
          <td>MobileNo:</td>
          <td><input type="number" id="t1"  placeholder="Enter RoleId" name="mobileNo" value={this.state.form.mobileNo} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}><FormError errorName={this.getInputError('mobileNo')} /></td>          
          </tr>
          <tr>
          <td>CollegeId:</td>
          <td><input type="number" id="t1"  placeholder="Enter CollegeId" name="collegeId" value={this.state.form.collegeId} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}><FormError errorName={this.getInputError('collegeId')} /></td>          
          </tr>
                    <tr>
          <td style={{textAlign:"center"}}> <button type='button' onClick={(event) => this.save(event)} style={{width:"91px"}} className='B'>Register</button> </td>
          <td> <input type="reset" onClick={(event) => this.reset(event)} className="B"/></td>
          </tr>
          </tbody>
          </table>
          </form>
          </div>
          </center>
      </>
    )
  }
}
