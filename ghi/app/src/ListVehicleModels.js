function VehicleModelsList(props) {
  console.log('props 7777:', props);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.vehicleModel.models.map(vehicleModel => {
          return (
            <tr key={vehicleModel.id}>
              <td>{vehicleModel.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default VehicleModelsList
