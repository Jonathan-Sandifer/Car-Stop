function SalesPersonRecordList(props) {
  // console.log('props 2222:', props.salesRecord);
  return (
    <>
      <h1>Sales person history</h1>
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
          {/* {props.salesRecord.sales_records.map(salesRecord => {
            return (
              <tr key={salesRecord.id}>
                <td>{salesRecord.sales_person.name}</td>
                <td>{salesRecord.sales_person.employee_id_number}</td>
                <td>{salesRecord.customer.name}</td>
                <td>{salesRecord.Vin_number.vin}</td>
                <td>{salesRecord.price}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </>
  );
}

export default SalesPersonRecordList