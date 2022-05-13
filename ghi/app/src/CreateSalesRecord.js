import React from 'react';

class SalesRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auto: "",
      sales_person: "",
      customer: "",
      price: "",
      customers: [],
      sales_people: [],
      autos: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAuto = this.handleChangeAuto.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  async componentDidMount() {
    const customerUrl = 'http://localhost:8090/api/customer/';
    const customerResponse = await fetch(customerUrl);
    const salesPersonUrl = "http://localhost:8090/api/salesperson/";
    const salesPersonResponse = await fetch(salesPersonUrl);
    const autoUrl = 'http://localhost:8100/api/automobiles/';
    const autoResponse = await fetch(autoUrl);


    if (customerResponse.ok) {
      const customerData = await customerResponse.json();
      this.setState({ customers: customerData.customers });
    }

    if (salesPersonResponse.ok) {
      const salesPersonData = await salesPersonResponse.json();
      // console.log('hello:', salesPersonData);
      this.setState({ sales_people: salesPersonData.sales_people });
    }
    if (autoResponse.ok) {
      const autoData = await autoResponse.json();
      // console.log('goodbye:', autoData);
      this.setState({ autos: autoData.autos });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.customers;
    delete data.sales_people;
    delete data.autos;
    console.log(data);
    const salesRecordUrl = "http://localhost:8090/api/sales_record/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(salesRecordUrl, fetchConfig);
    if (response.ok) {
      const newSalesRecord = await response.json();
      console.log(newSalesRecord);
      this.setState({
        auto: "",
        sales_person: "",
        customer: "",
        price: ""
      });
    } else {
      console.log('bad response')
    }
  }

  handleChangeAuto(event) {
    const value = event.target.value;
    this.setState({ auto: value });
  }

  handleChangeCustomer(event) {
    const value = event.target.value;
    this.setState({ customer: value });
  }

  handleChangeSalesPerson(event) {
    const value = event.target.value;
    this.setState({ sales_person: value });
  }

  handleChangePrice(event) {
    const value = event.target.value;
    this.setState({ price: value });
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={this.handleSubmit} id="create-sales-record-form">
              <div className="mb-3">
                <select onChange={this.handleChangeAuto} value={this.state.auto} placeholder="auto" id="auto" className="form-select">
                  <option value="">Choose an automobile</option>
                  {this.state.autos.map(auto => {
                    return (
                      <option key={auto.id} value={auto.id}>{auto.model.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeSalesPerson} value={this.state.sales_person} placeholder="sales_person" id="sales_person" className="form-select">
                  <option value="">Choose a sales person</option>
                  {this.state.sales_people.map(sales_person => {
                    return (
                      <option key={sales_person.id} value={sales_person.id}>{sales_person.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeCustomer} value={this.state.customer} placeholder="customer" id="customer" className="form-select">
                  <option value="">Choose a customer</option>
                  {this.state.customers.map(customer => {
                    return (
                      <option key={customer.id} value={customer.id}>{customer.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePrice} value={this.state.price} placeholder="price" required type="text" name="price" id="price" className="form-control" />
                <label htmlFor="manufacturer">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesRecordForm;