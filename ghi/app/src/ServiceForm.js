import React from 'react';

class ServiceForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            vin: '',
            customer: '',
            date_time: '',
            technician:'',
            technicians: [],
            reason: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
    this.handleChangeDateTime = this.handleChangeDateTime.bind(this);
    this.handleChangeTechnician  = this.handleChangeTechnician.bind(this);
    this.handleChangeReason  = this.handleChangeReason.bind(this);
    }
    async componentDidMount() {
        const technicianurl = 'http://localhost:8080/api/technician/';
        const technicianresponse = await fetch(technicianurl);
    
        if (technicianresponse.ok) {
          const data = await technicianresponse.json();
          this.setState({ technicians: data.technicians });
        }
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;
        console.log(data)

        const serviceUrl = "http://localhost:8080/api/services/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if (response.ok) {
            const newService = await response.json();
            console.log(newService);
            this.setState({
                vin: '',
                customer: '',
                date_time: '',
                technician:'',
                reason:'',
            });
        }
    }
    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }
    handleChangeCustomer(event) {
        const value = event.target.value;
        this.setState({ customer: value });
    }
    handleChangeDateTime(event) {
        const value = event.target.value;
        this.setState({ date_time: value });
    }
    handleChangeTechnician(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }
    handleChangeReason(event) {
        const value = event.target.value;
        this.setState({ reason: value });
    }
    

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a new Service</h1>
                <form onSubmit={this.handleSubmit} id="create-service-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeVin} value={this.state.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                        <label htmlFor="vin">Vin</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeCustomer} value={this.state.customer} placeholder="customer" required type="text" name="customer" id="customer" className="form-control" />
                        <label htmlFor="owner">Customer</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeDateTime} value={this.state.date_time} placeholder="date_time" required type="date" name="date_time" id="date_time" className="form-control" />
                        <label htmlFor="date_time">Service Date and Time</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleChangeTechnician} value={this.state.technician} required name="technician" id="technician" className="form-select">
                        <option value="">Choose a Technician</option>
                        {this.state.technicians.map(tech => {
                            return (
                            <option key={tech.id} value={tech.id}>{tech.name}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeReason} value={this.state.reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
                        <label htmlFor="reason">Reason</label>
                    </div>
                    <button type='submit' className="btn btn-primary">Add</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default ServiceForm;
