import React from 'react';

class ManufacturerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      manufacturer: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.manufacturer;

    const locationUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newManufacturer = await response.json();
      this.setState({
        name: "",
      });
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }
  

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
            <form onSubmit={this.handleSubmit.bind(this)} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="manufacturer" className="form-control" />
                <label htmlFor="manufacturer">Name</label>
              </div>
              <button type='submit' className="btn btn-primary">Create</button>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}
export default ManufacturerForm;