function VehicleModelsList(props) {
  // console.log('props 7777:', props);
  return (
    <>
      <h1>Vehicle models</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {props.vehicleModel.models.map(vehicleModel => {
            return (
              <tr key={vehicleModel.id}>
                <td>{vehicleModel.name}</td>
                <td>{vehicleModel.manufacturer.name}</td>
                <td><img src={vehicleModel.picture_url} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default VehicleModelsList
