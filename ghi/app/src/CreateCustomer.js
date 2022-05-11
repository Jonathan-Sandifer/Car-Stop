import React from 'react';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone_number: "",
      customer: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.customer;

    const customerUrl = "http://localhost:8090/api/customer/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(customerUrl, fetchConfig);
    if (response.ok) {
      const newCustomer = await response.json();
      console.log(newCustomer);
      this.setState({
        name: "",
        employee_id_number: "",
        phone_number: "",
      });
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeAddress(event) {
    const value = event.target.value;
    this.setState({ address: value });
  }

  handleChangePhoneNumber(event) {
    const value = event.target.value;
    this.setState({ phone_number: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Customer</h1>
            <form onSubmit={this.handleSubmit} id="create-customer-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="manufacturer">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeAddress} value={this.state.address} placeholder="Name" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="manufacturer">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePhoneNumber} value={this.state.phone_number} placeholder="Name" required type="text" name="phone-number" id="phone-number" className="form-control" />
                <label htmlFor="manufacturer">Phone Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerForm;