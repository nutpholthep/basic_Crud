import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Studen() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

 async function handleDelete (id){
    try {
       await axios.delete("http://localhost:8081/student/"+id)
        window.location.reload()
    } catch (error) {
        console.log(error);
    }
    

  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success my-3 mx-2">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {student.map((data, index) => (
              <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>
                  <Link
                    to={`update/${data.ID}`}
                    className="btn btn-warning mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.ID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Studen;
