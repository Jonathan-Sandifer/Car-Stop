function AutomobileList(props) {
    console.log("Props:", props);
    return (
      <div className="container">
        <h2 className="display-5 fw-bold">Automobiles</h2>
        <div className="row">
          {props.automobiles.automobiles.map(automobile => {
            return (
              <div key={automobile.id} className="col">
                <div className="card mb-3 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{automobile.model}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {automobile.color}
                    </h6>
                    {/* <p className="card-text">
                      {automobile.location}
                    </p> */}
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