import React from 'react';

class VehicleModelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture_url: "",
      manufacturer: "",
      manufacturers: [],
      // vehicle_model: [] // could be problems here 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePicture = this.handleChangePicture.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      // console.log('hello:', data);
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.manufacturer;
    delete data.picture_url;
    delete data.name;

    const modelsUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(modelsUrl, fetchConfig);
    if (response.ok) {
      const newVehicleModel = await response.json();
      console.log(newVehicleModel);
      this.setState({
        name: "",
        picture_url: "",
        manufacturer: "",
      });
    } else {
      console.log('bad response')
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangePicture(event) {
    const value = event.target.value;
    this.setState({ picture_url: value });
  }

  handleChangeManufacturer(event) {
    const value = event.target.value;
    this.setState({ manufacturer: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a vehicle model</h1>
            <form onSubmit={this.handleSubmit} id="create-vehicle-model-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="manufacturer" className="form-control" />
                <label htmlFor="manufacturer">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePicture} value={this.state.picture_url} placeholder="Picture" required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="picture_url">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeManufacturer} value={this.state.manufacturer} placeholder="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.href} value={manufacturer.id}>{manufacturer.name}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleModelForm;