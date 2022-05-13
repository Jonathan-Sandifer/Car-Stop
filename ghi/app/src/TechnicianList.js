function TechnicianList(props) {
  console.log('props 2222:', props);
  return (
    <>
      <h1>Technicians</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Technician</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {props.technicians.technicians.map(technicians => {
            return ( 
              <tr key={technicians.id}>  
                   <td>{technicians.name}</td>
                   <td>{technicians.employee_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TechnicianList