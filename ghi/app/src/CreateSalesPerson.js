import React from 'react';

class SalesPersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      employee_id_number: "",
      sales_person: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmployeeIDNumber = this.handleChangeEmployeeIDNumber.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.sales_person;

    const salesPersonUrl = "http://localhost:8090/api/salesperson/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(salesPersonUrl, fetchConfig);
    if (response.ok) {
      const newSalesPerson = await response.json();
      console.log(newSalesPerson);
      this.setState({
        name: "",
        employee_id_number: "",
      });
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeEmployeeIDNumber(event) {
    const value = event.target.value;
    this.setState({ employee_id_number: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Salesperson</h1>
            <form onSubmit={this.handleSubmit} id="create-salesperson-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="manufacturer">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeEmployeeIDNumber} value={this.state.employee_id_number} placeholder="Name" required type="text" name="name" id="employee_id_number" className="form-control" />
                <label htmlFor="manufacturer">Employee ID Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesPersonForm;