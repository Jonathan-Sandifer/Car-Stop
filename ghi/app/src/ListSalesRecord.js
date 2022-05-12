function SalesRecordList(props) {
  console.log('props 2222:', props);
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
          {/* {props.SalesRecord.SalesRecord.map(SalesRecord => {
            return (
              <tr key={SalesRecord.id}>
                   <td>{SalesRecord.sales_person.name}</td>
                   <td>{SalesRecord.sales_person.employee_id_number}</td>
                   <td>{SalesRecord.customer.name}</td>
                   <td>{SalesRecord.vin_number.vin}</td>
                   <td>{SalesRecord.price}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </>
  );
}

export default SalesRecordList