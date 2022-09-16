import React, { useState } from "react";
import { employeeData } from "../../data";
import Swal from "sweetalert2";
import Header from "./Header";
import Edit from "./Edit";
import Add from "./Add";
import List from "./List";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  const handleEdit = (employeeId) => {
    console.log("handle edit", employeeId);
    setIsEditing(true);
    setSelectedEmployee(employeeData.filter((emp) => emp.id === employeeId)[0]);
  };

  const handleDelete = async (employeeId) => {
    try {
      const result = await Swal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "Cancel",
      });

      if (result.value) {
        const filteredEmployees = employees.filter((emp) => emp.id !== employeeId);
        setEmployees(filteredEmployees);

        Swal.fire({
          icon: "success",
          title: "Deleted",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {}
  };
  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}{" "}
      {/* Edit */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
