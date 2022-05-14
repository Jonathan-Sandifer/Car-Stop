function ManufacturerList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.manufacturers.manufacturers.map(manufacturers => {
          return (
            <tr key={manufacturers.id}>
              <td>{manufacturers.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ManufacturerList


