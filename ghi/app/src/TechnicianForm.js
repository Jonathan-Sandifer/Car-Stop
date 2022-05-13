import React from 'react';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            employeeNumber: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.employeeNumber
        delete data.technicians

        const technicianURL = "http://localhost:8080/api/technician/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(technicianURL, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            console.log(newTechnician)
            this.setState({
              name: "",
              employeeNumber: "",
            });
        }
    }

    handleChangeName(event) {
      const value = event.target.value;
      this.setState({ name: value });
    }
    handleChangeEmployeeNumber(event) {
      const value = event.target.value;
      this.setState({ employeeNumber: value });
    }

    render() {
        return (
            <div className="row">
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Create a New Technician</h1>
                  <form onSubmit={this.handleSubmit} id="create-technician-form">
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" id="name" className="form-control" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input onChange={this.handleChangeEmployeeNumber} value={this.state.employeeNumber} placeholder="Employee Number" required type="text" id="employeeNumber" className="form-control" />
                      <label htmlFor="employeeNumber">Employee number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
              </div>
            </div>
        );
    }
}

export default TechnicianForm;
