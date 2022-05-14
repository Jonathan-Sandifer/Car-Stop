function ServiceHistoryList(props) {
    console.log('props 2222:', props.servicehistory);
    return (
      <>
        <h1>Service Records</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Customer Name</th>
              <th>Date and Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {props.servicehistory.servicehistory.map(servicehistory => {
              return ( 
                <tr key={servicehistory.id}>  
                     <td>{servicehistory.servicehistory.name}</td>
                     <td>{servicehistory.date_time}</td>
                     <td>{servicehistory.customer.name}</td>
                     <td>{servicehistory.vin}</td>
                     <td>{servicehistory.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  
  export default ServiceHistoryList