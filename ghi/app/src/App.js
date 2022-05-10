import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import ManufacturerList from './ListManufacturer';
import ManufacturerForm from './CreateManufacturer';
import VehicleModelsList from './ListVehicleModels';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobiles">
<<<<<<< HEAD
            <Route index element={<AutomobileList automobiles={props.automobiles} />} />
            {/* <Route path="new" element={<AutomobileForm />}/> */}
=======
            <Route index element={<AutomobileList automobiles={props.automobiles} />}/>
            <Route path="new" element={<AutomobileForm />}/>
>>>>>>> main
          </Route>
          <Route path="/manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="/models">
            <Route index element={<VehicleModelsList vehicleModel={props.vehicleModel} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
