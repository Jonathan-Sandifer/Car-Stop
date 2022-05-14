import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import ManufacturerList from './ListManufacturer';
import ManufacturerForm from './CreateManufacturer';
import VehicleModelsList from './ListVehicleModels';
import VehicleModelForm from './CreateVehicleModel';
import SalesPersonForm from './CreateSalesPerson';
import CustomerForm from './CreateCustomer';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';
import ServiceHistoryList from './ServiceHistoryList';
import SalesRecordList from './ListSalesRecord';
import SalesRecordForm from './CreateSalesRecord';
import SalesPersonRecordList from './ListSpecificSalesRecords';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobiles">
            <Route index element={<AutomobileList automobiles={props.automobiles} />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="/manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="/models">
            <Route index element={<VehicleModelsList vehicleModel={props.vehicleModel} />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="/technician">
            <Route index element={<TechnicianList technicians={props.technicians} />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="/services">
            <Route index element={<ServiceList services={props.services} />} />
            <Route path="new" element={<ServiceForm />} />
          </Route>
          <Route path="/servicehistory">
            <Route index element={<ServiceHistoryList />} />
          </Route>
          <Route path="/salesperson">
            <Route index element={<SalesPersonForm />} />
          </Route>
          <Route path="/customer">
            <Route index element={<CustomerForm />} />
          </Route>
          <Route path="/sales_record">
            <Route index element={<SalesRecordList salesRecord={props.salesRecord} />} />
            <Route path="new" element={<SalesRecordForm />} />
          </Route>
          <Route path="/sale_history/">
            <Route index element={<SalesPersonRecordList salesRecord={props.salesRecord} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
