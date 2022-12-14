import React from 'react';

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      color: "",
      vin: "",
      manufacturer: "",
      manufacturers: [],
      model: "",
      models: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.model;

    const modelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
      const newAutomobile = await response.json();
      console.log(newAutomobile);
      this.setState({
        year: "",
        color: "",
        vin: "",
        manufacturer: "",
        model: "",
      });
    } else {
      console.log('bad response')
    }
  }

  handleChangeYear(event) {
    const value = event.target.value;
    this.setState({ year: value });
  }

  handleChangeVin(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }

  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangeModel(event) {
    const value = event.target.value;
    this.setState({ model: value });
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
            <h1>Add a new Automobile</h1>
            <form onSubmit={this.handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeVin} value={this.state.fabric} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Vin</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeYear} value={this.state.year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>
              {/* This was supposed to be a dropdown of a list of manufacturers to choose from */}
              <div className="mb-3">
                <select onChange={this.handleChangeManufacturer} value={this.state.manufacturer} placeholder="Manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.href} value={manufacturer.id}>{manufacturer.name}</option>
                    )
                  })}
                </select>
                </div>
                {/* This was supposed to make a dropdown of the models to choose from */}
                {/* <div className="mb-3">
                <select onChange={this.handleChangeModel} value={this.state.model} placeholder="Model" id="model" className="form-select">
                  <option value="">Choose a model</option>
                  {this.state.models.map(model => {
                    return (
                      <option key={model.href} value={model.id}>{model.name}</option>
                    )
                  })}
                </select>
                </div> */}
              <button type='submit' className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AutomobileForm;