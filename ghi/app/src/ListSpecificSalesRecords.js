import React from 'react';

class SalesPersonRecordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales_people: [],
      sales_person: [],
    };

    this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);

  }
  async handleChangeSalesPerson(event) {
    const value = event.target.value
    const salesPersonUrl = `http://localhost:8090/api/sale_history/${value}/`
    const salesPersonResponse = await fetch(salesPersonUrl)


    if (salesPersonResponse.ok) {
      const salesPersonData = await salesPersonResponse.json()
      console.log('hello:', salesPersonData);
      this.setState({ sales_person: salesPersonData })
    }
  }

  async componentDidMount() {
    const salesPeopleUrl = 'http://localhost:8090/api/salesperson/';
    const salesPeopleResponse = await fetch(salesPeopleUrl)
    if (salesPeopleResponse.ok) {
      const salesPeopleData = await salesPeopleResponse.json()
      // console.log('howdy:', salesPeopleData);
      this.setState({ sales_people: salesPeopleData.sales_people })
    }

  }
  render() {
    return (
      <>
        <h1>Sales person history</h1>
        <div className="mb-3">
          <select onChange={this.handleChangeSalesPerson} placeholder="sales_people" id="sales_people" className="form-select">
            <option value="">Choose a sales person</option>
            {this.state.sales_people.map(sales_person => {
              return (
                <option key={sales_person.id} value={sales_person.id}>{sales_person.name}</option>
              )
            })}
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Customer</th>
              <th>Vin</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales_person.map(sales_person => {
              return (
                <tr key={sales_person.id}>
                  <td>{sales_person.sales_person.name}</td>
                  <td>{sales_person.customer.name}</td>
                  <td>{sales_person.Vin_number.vin}</td>
                  <td>{sales_person.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default SalesPersonRecordList;