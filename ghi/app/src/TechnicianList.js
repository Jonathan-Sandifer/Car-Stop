function TechnicianList(props) {
    console.log("888Props:", props);
    return (
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Technician</th>
          <th>Employee Number</th>
        </tr>
      </thead>
      <tbody>
          {props.technician.map(technician => {
            return (
              <tr key={technician.id}>
                <td>{technician.technician}</td>
                <td>{technician.employee_number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
  
export default TechnicianList