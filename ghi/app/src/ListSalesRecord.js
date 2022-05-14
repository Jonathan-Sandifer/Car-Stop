function SalesRecordList(props) {
  return (
    <>
      <h1>Sales Records</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Employee Number</th>
            <th>Customer</th>
            <th>Vin</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.salesRecord.sales_records.map(salesRecord => {
            return (
              <tr key={salesRecord.id}>
                <td>{salesRecord.sales_person.name}</td>
                <td>{salesRecord.sales_person.employee_id_number}</td>
                <td>{salesRecord.customer.name}</td>
                <td>{salesRecord.Vin_number.vin}</td>
                <td>{salesRecord.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SalesRecordList