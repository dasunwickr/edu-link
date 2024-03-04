import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Importing and using the useNavigate hook

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].student_name,
          email: res.data[0].student_email,
        });
      })
      .catch((err) => console.log(err));
  }, [id]); // Removed 'values' from the dependency array since it causes an infinite loop

  const handleNameChange = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/update/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/"); // Navigating back to the home page after successful update
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
              value={values.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="form-control"
              value={values.email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
