import React from 'react';

class TechnicianForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technician: "",
      employee_number: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
    this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.technician;
    delete data.employee_number;

    const technicianUrl = "http://localhost:8080/api/technician/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(technicianUrl, fetchConfig);
    if (response.ok) {
      const newTechnician = await response.json();
      console.log(newTechnician);
      this.setState({
        technician: "",
        employee_number: "",
      });
    }
  }

  handleChangeTechnician(event) {
    const value = event.target.value;
    this.setState({ technician: value });
  }

  handleChangeEmployeeNumber(event) {
    const value = event.target.value;
    this.setState({ employee_number: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeTechnician} value={this.state.technician} placeholder="Technician" required type="text" name="technician" id="technician" className="form-control" />
                <label htmlFor="manufacturer">Technician</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeEmployeeNumber} value={this.state.employee_number} placeholder="EmployeeNumber" required type="text" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="manufacturer"></label>
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