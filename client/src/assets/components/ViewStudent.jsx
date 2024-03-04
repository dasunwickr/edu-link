import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewStudent = () => {
  const { id } = useParams();

  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h2>Student Details</h2>
          <h5>{student.student_id}</h5>
          <h5>{student.student_name}</h5>
          <h5>{student.student_email}</h5>
        </div>
        <Link to="/" className="btn btn-primary mx-2">
          Back
        </Link>
        <Link to={`/edit/${student.student_id}`} className="btn btn-info">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ViewStudent;
