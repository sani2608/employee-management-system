import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const Add = ({ setEmployees, setIsAdding, employees }) => {
  const textInputRef = useRef();
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = (event) => {
    event.preventDefault(); // prevent page from reloading.
    if (!firstName || !lastName || !email || !salary || !date) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showConfirmButton: true,
      });
    } else {
      const id = employees.length + 1;
      const newEmployee = {
        id,
        first_name: firstName,
        last_name: lastName,
        email,
        salary,
        date,
      };
      employees.push(newEmployee);
      setEmployees(employees);
      setIsAdding(false);

      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${firstName} data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
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
            Add
          </button>
          <button
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
