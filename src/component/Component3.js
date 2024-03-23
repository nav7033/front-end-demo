import React, { useState, useEffect } from 'react';
import { Resizable } from 're-resizable';


const Component3 = ({ width, onResize }) => {
    // State variables to store form data, message, and counts
    const [Name, setName] = useState("");
    const [employeeId, setEmployee] = useState("");
    const [compney, setComponey] = useState("");
    const [EmployeeData,setEmployeeData]=useState({Name:"",employeeId:"",companyName:""})
    const [addCount, setAddCount] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const [id, setId] = useState("");

    // Function to handle changes in the data input fields
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmployee = (e) => {
        setEmployee(e.target.value);
    };
    const handleComponey = (e) => {
        setComponey(e.target.value);
    };

    // Function to handle changes in the ID input field
    const handleChangeId = (e) => {
        setId(e.target.value);
    };

    // Function to handle the Add button click
    const handleAdd = async () => {
        // Validate data and ID input
        if (Name === "" || employeeId === "" || compney=== "" || id === "") {
            alert("Please fill ID and all Data to add");
            return;
        }

        // Create request options for POST request
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "Id": id, "Name": Name, "employeeId":employeeId,"companyName":compney })
        };

        // Send POST request to add data
        fetch("https://nodecodeeevoluction-demo.onrender.com/api/add/", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                setEmployeeData(response.data);
                setAddCount(prevCount => prevCount + 1);
                // Clear input fields after successful addition
                document.getElementById("idInput").value = "";
                document.getElementById("inputName").value = "";
                document.getElementById("inputEmployeeId").value = "";
                document.getElementById("inputCompanyName").value = "";
                setId("")
                setName("")
                setEmployee("")
                setComponey("")
            })
            .catch((err) => {
                console.log(err);
                alert('Error occurred while adding data');
            });
    };

    // Function to handle the Update button click
    const handleUpdate = () => {
        // Validate data and ID input
        if (id === "") {
            alert("id is required");
            return;
        }
        
        const updateObject = {};
        if (Name) updateObject.Name = Name;
        if (employeeId) updateObject.employeeId = employeeId;
        if (compney) updateObject.companyName = compney;

        if (Object.keys(updateObject).length === 0) {
            alert("No data provided for update");
            return; 
        }

        // Create request options for PUT request
        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateObject)
        };

        // Send PUT request to update data
        fetch(`https://nodecodeeevoluction-demo.onrender.com/api/update/${id}/`, requestOptions)
            .then((response) => response.json())
            .then((response) => {
                setEmployeeData(response.data);
                setUpdateCount(prevCount => prevCount + 1);
                // Clear input fields after successful update
                document.getElementById("idInput").value = "";
                document.getElementById("inputName").value = "";
                document.getElementById("inputEmployeeId").value = "";
                document.getElementById("inputCompanyName").value = "";
                setId("")
                setName("")
                setEmployee("")
                setComponey("")
            })
            .catch((err) => {
                alert('Error occurred while updating data');
            });
    };

    // Function to handle the Count button click
    const handleCount = () => {
        // Send GET request to fetch add and update counts
        fetch("https://nodecodeeevoluction-demo.onrender.com/api/count/")
            .then((response) => response.json())
            .then((response) => {
                // Update add and update counts
                setAddCount(response.data.addCount);
                setUpdateCount(response.data.updateCount);
            })
            .catch((err) => {
                alert('Error occurred while fetching data');
            });
    };

    // Render JSX
    return (
        <div style={{ flex: '1 1 auto' }}>
            <Resizable
                style={{ width: width + 'px', maxWidth: '100%' }}
                defaultSize={{ width: width, height: '100%' }}
                minWidth={100}
                maxWidth={'100%'}
                onResizeStop={onResize}
            >
                <div className="component">
                    <div>
                        <div className="form-outline">
                            <label className="form-label">Id</label>
                            <input type="text" name="id" id='idInput' style={{ width: "50%" }} onChange={handleChangeId} className="form-control" />
                        </div>
                        <div className="form-outline">
                            <label className="form-label">Name</label>
                            <input type="text" id='inputName' style={{ width: '50%', marginBottom: "12px" }} onChange={handleName} className="form-control" />
                        </div>
                        <div className="form-outline">
                            <label className="form-label">Employee Id</label>
                            <input type="text" id='inputEmployeeId' style={{ width: '50%', marginBottom: "12px" }} onChange={handleEmployee} className="form-control" />
                        </div>
                        <div className="form-outline">
                            <label className="form-label">Company Name</label>
                            <input type="text" id='inputCompanyName' style={{ width: '50%', marginBottom: "12px" }}  onChange={handleComponey} className="form-control" />
                        </div>
                        <div className="btn-group shadow-0" style={{ marginBottom: "12px" }} role="group">
                            <button type="button" className="btn btn-outline-secondary" onClick={handleAdd}>Add</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleUpdate}>Update</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleCount}>Count</button>
                        </div>
                        <p>Name: {EmployeeData.Name}</p>
                        <p>Employee Id: {EmployeeData.employeeId}</p>
                        <p>Componey Name: {EmployeeData.companyName}</p>
                        <p>Add Count: {addCount}</p>
                        <p>Update Count: {updateCount}</p>
                    </div>
                </div>
            </Resizable>
        </div>
    );
};

// Export Component3
export default Component3;
