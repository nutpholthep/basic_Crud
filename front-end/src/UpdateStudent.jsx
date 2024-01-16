import axios from "axios";
import  { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateStudent() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
const navigate = useNavigate();
const {id} = useParams();
function handleSubmit (e){
    e.preventDefault()
    axios.put("http://localhost:8081/update/"+id,{name,email})
    .then(res=>{
        console.log(res)
        navigate("/")
    }).catch(err=>console.log(err))
}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="bg-white w-50 rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
           
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
