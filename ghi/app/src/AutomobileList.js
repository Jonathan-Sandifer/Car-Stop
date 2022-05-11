function AutomobileList(props) {
    console.log("888Props:", props);
    return (
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Vin</th>
          <th>Color</th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
          {props.automobiles.autos.map(automobiles => {
            return (
              <tr key={automobiles.id}>
                <td>{automobiles.vin}</td>
                <td>{automobiles.color}</td>
                <td>{automobiles.year}</td>
                <td>{automobiles.model.name}</td>
                <td>{automobiles.model.manufacturer.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
  
export default AutomobileList