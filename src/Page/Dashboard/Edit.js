import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ setEmployees, setIsEditing, selectedEmployee, employees }) => {
  console.log("EDIT", selectedEmployee);
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const textInputRef = useRef();
  const id = selectedEmployee.id;
  const [firstName, setFirstName] = useState(selectedEmployee.last_name);
  const [lastName, setLastName] = useState(selectedEmployee.first_name);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showConfirmButton: true,
      });
      console.log("something wrong");
    } else {
      const employee = {
        id,
        first_name: firstName,
        last_name: lastName,
        email,
        salary,
        date,
      };
      console.log(employee);

      for (let index = 0; index < employees.length; index++) {
        if (employees[index].id === id) {
          employees.splice(index, 1, employee);
          break;
        }
      }

      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${firstName} data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });

      setIsEditing(false);
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInputRef}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="firstName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="firstName">Email</label>
        <input
          id="firstName"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="firstName">Salary</label>
        <input
          id="firstName"
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <label htmlFor="firstName">Date</label>
        <input
          id="firstName"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <button type="submit" value="Add">
            Update
          </button>
          <button
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
