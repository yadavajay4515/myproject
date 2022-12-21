import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";

export default class Addrole extends Base {

    constructor(props){
        super(props);
        this.state={
            inputError:{
                error:'',
                message:'',
                name:'',
                discription:''


            },
            form:{
                name:'',
                discription:''
            }
        }
        if (this.props.match.params.rid) {
            this.getdata();
      
          }
      
    }
    reset(event){
      this.setState({
        form:{
          name:'',
          discription:''
      }

      })
      this.changeInputError("message","");
      this.changeInputError("error","");
      this.changeInputError("name","");
      this.changeInputError("discription","");
    }
    getdata() {
        let id = this.props.match.params.rid;
        axios.get("http://api.sunilos.com:9080/ORSP10/Role/get/" + id)
          .then((res) => {
            this.setState({ form: res.data.result.data });
    
          })
      }


    save(){
        axios.post("http://api.sunilos.com:9080/ORSP10/Role/save/",this.state.form)
        .then((res)=>{
            console.log(res);
            if(res.data.result.inputerror){

                this.setState({inputError:res.data.result.inputerror});
                this.changeInputError("error","true");
            }
            else{
                this.changeInputError("message","Data save successfully");
                this.changeInputError("error","false");
                this.changeInputError("name","");
                this.changeInputError("discription","");
                


            }

        });
    }
  render() {
    return (
      <>
      
         <div className='container my-5' >
          <div className="container text-center">
            {(() => {
              if (this.props.match.params.rid) {
                return (

                  <h2 style={{marginRight:"86px"}}>Update Role</h2>
                )
              }

              if (!this.props.match.params.rid) {
                return (

                  <h2 style={{marginRight:"86px"}}>Add Role</h2>
                )
              }


            })()

            }
           
               
      
      <div style={{ height: "50px" }}> <FormMessage error={this.getInputError("error")} message={this.getInputError('message')} /> </div>
    
               
        <div style={{padding:"10px 0px"}} className="row justify-content-md-center">
                  <div className="col text-end fw-bold">
                    Name:
                  </div>
                  <div className="col-6 text-start col-lg-3">
                    <input type="text"placeholder="Enter Name" name='name' value={this.state.form.name} onChange={this.changeFormState} size={20}/>
                  </div>
                  <div className="col text-start">
                  <FormError errorName={this.getInputError('name')}/>
                  </div>
                </div>
                <div style={{padding:"10px 0px"}} className="row justify-content-md-center">
                  <div className="col text-end fw-bold">
                    Add Description
                  </div>
                  <div className="col-6 text-start col-lg-3">
                    <input type="text"placeholder="Add Description" name='Descriptionn' value={this.state.form.discription} onChange={this.changeFormState}size={20}/>
                  </div>
                  <div className="col text-start">
                  <FormError errorName={this.getInputError('discription')}/>
                  </div>
                </div>
                <div style={{padding:"10px 0px"}} className="row justify-content-md-center">
                  <div className="col text-end fw-bold">
                   
                  </div>
                  <div className="col-6 text-center col-lg-3">
                    
                    &nbsp;
                    
                  </div>
                  <div style={{marginLeft:"150px"}} className="row justify-content-md-center">
                  <div className="col text-end fw-bold">
                  <button className="btn btn-primary" onClick={(event) => this.save(event)}>Add Role</button>
                  </div>
                  <div className="col-6 text-start col-lg-3">
                  <button   className="btn btn-primary"onClick={(event) => this.reset(event)}>reset</button>
                  </div>
                  <div className="col text-start">
   
                  </div>
                </div>
                 
                </div>
                </div>
                </div>
      </>
    )
  }
}
