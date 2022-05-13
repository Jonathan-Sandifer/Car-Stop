function ServiceList(props) {
    console.log('props 2222:', props);
    return (
      <>
        <h1>Services</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Customer</th>
              <th>Date And Time</th>
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {props.services.services.map(services => {
              return ( 
                <tr key={services.id}>  
                     <td>{services.services.services.vin}</td>
                     <td>{services.services.customer}</td>
                     <td>{services.services.date_time}</td>
                     <td>{services.services.technician}</td>
                     <td>{services.services.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  
  export default ServiceList