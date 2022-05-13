async function cancelClick(service){
  console.log(service)
  const url = `http://localhost:8080/api/appointments/${service.id}/cancelled/`
  const fetchConfig = {
      method: "put",
      headers: {
          'Content-Type': 'application/json',
      },
  };
  const response = await fetch(url, fetchConfig);
  if(response.ok){
      console.log("this is the response", response)
  }
}

async function finishedClick(service){
  console.log(service)
  const url = `http://localhost:8080/api/appointments/${service.id}/finished/`
  const fetchConfig = {
      method: "put",
      headers: {
          'Content-Type': 'application/json',
      },
  };
  const response = await fetch(url, fetchConfig);
  if(response.ok){
      console.log("this is the response", response)
  }
}


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
              console.log('HERE' , services);
              return ( 
                <tr key={services.id}>  
                     <td>{services.vin}</td>
                     <td>{services.customer}</td>
                     <td>{services.date_time}</td>
                     <td>{services.technician.name}</td>
                     <td>{services.reason}</td>
                     <td>
                          <button className="btn btn-danger" onClick={() => {cancelClick(services)}} >Cancel</button>
                          <button className="btn btn-success" onClick={() => {finishedClick(services)}} >Finished</button>
                      </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  
  export default ServiceList