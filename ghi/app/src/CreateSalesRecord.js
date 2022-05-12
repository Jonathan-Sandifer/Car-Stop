import React from 'react';

class SalesRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      automobile: "",
      sales_person: "",
      customer: "",
      price:"",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAutomobile = this.handleChangeAutomobile.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8090/api/sales_record/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      // console.log('hello:', data);
      this.setState({ records: data.records });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
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
        automobile: "",
        sales_person: "",
        customer: "",
        price:""
      });
    } else {
      console.log('bad response')
    }
  }

  handleChangeAutomobile(event) {
    const value = event.target.value;
    this.setState({ automobile: value });
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
            {/* <form onSubmit={this.handleSubmit} id="create-sales-record-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="manufacturer" className="form-control" />
                <label htmlFor="manufacturer">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePicture} value={this.state.picture_url} placeholder="Picture" required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="picture_url">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeManufacturer} value={this.state.manufacturer_id} placeholder="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.href} value={manufacturer.id}>{manufacturer.name}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SalesRecordForm;