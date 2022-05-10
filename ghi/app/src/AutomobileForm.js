import React from 'react';

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      color: "",
      vin: "",
      model: "",
      locations: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/locations/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ locations: data.locations });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.locations;
    delete data.picture;

    const locationUrl = 'http://localhost:8090/api/hats/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newHat = await response.json();
      console.log(newHat);
      this.setState({
        fabric: '',
        style: '',
        color: '',
        picture: '',
        location: '',
      });
    }
  }

  handleChangeFabric(event) {
    const value = event.target.value;
    this.setState({ fabric: value });
  }

  handleChangeStyle(event) {
    const value = event.target.value;
    this.setState({ style: value });
  }

  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangePicture(event) {
    const value = event.target.value;
    this.setState({ picture: value });
  }

  handleChangeLocation(event) {
    const value = event.target.value;
    this.setState({ location: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new hat!</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeFabric} value={this.state.fabric} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control" />
                <label htmlFor="fabric">Fabric</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeStyle} value={this.state.style} placeholder="Style" required type="text" name="style" id="style" className="form-control" />
                <label htmlFor="style">Style</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePicture} value={this.state.picture} placeholder="Picture" required type="text" name="picture" id="picture" className="form-control" />
                <label htmlFor="picture">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeLocation} value={this.state.location} required name="location" id="location" className="form-select">
                  <option value="">Choose a location</option>
                  {this.state.locations.map(location => {
                    return (
                      <option key={location.id} value={location.href}>{location.closet_name.charAt(0).toUpperCase() + location.closet_name.slice(1)} Shelf:{location.shelf_number} Section:{location.section_number}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AutomobileForm;