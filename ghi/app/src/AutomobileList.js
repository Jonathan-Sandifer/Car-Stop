function AutomobileList(props) {
    console.log("888Props:", props);
    return (
      <div className="container">
        <h2 className="display-5 fw-bold">Automobiles</h2>
        <div className="row">
          {props.automobiles.autos.map(automobiles => {
            return (
              <div key={automobiles.id} className="col">
                <div className="card mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{automobiles.vin}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default AutomobileList