import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let automobileData, manufacturerData, vehicleModelData, salesRecordData, serviceData, technicianData, servicehistoryData;
  const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/");
  const vehicleModelResponse = await fetch("http://localhost:8100/api/models/");
  const salesRecordResponse = await fetch("http://localhost:8090/api/sales_record/");
  const technicianResponse = await fetch("http://localhost:8080/api/technician/");
  const serviceResponse = await fetch("http://localhost:8080/api/services/")
  const servichistoryResponse = await fetch("http://localhost:8080/api/servicehistory/")


  if (automobileResponse.ok) {
    automobileData = await automobileResponse.json();
    // console.log('automobile data: ', automobileData)
  } else {
    console.error(automobileResponse);
  }
  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
  } else {
    console.error(manufacturerResponse);
  }
  if (vehicleModelResponse.ok) {
    vehicleModelData = await vehicleModelResponse.json();
  } else {
    console.error(vehicleModelResponse);
  }
  if (salesRecordResponse.ok) {
    salesRecordData = await salesRecordResponse.json();
  } else {
    console.error(salesRecordResponse);
  }
  if (technicianResponse.ok) {
    technicianData = await technicianResponse.json();
    // console.log(technicianData);
  } else {
    console.error(technicianResponse);
  }
  if (serviceResponse.ok) {
    serviceData = await serviceResponse.json();
    // console.log(serviceData);
  } else {
    console.error(serviceResponse);
  }
  if (servichistoryResponse.ok) {
    servicehistoryData = await servichistoryResponse.json();
    // console.log(serviceData);
  } else {
    console.error(servichistoryResponse);
  }
  root.render(
    <React.StrictMode>
      <App automobiles={automobileData} 
      manufacturers={manufacturerData} 
      vehicleModel={vehicleModelData} 
      salesRecord={salesRecordData} 
      services={serviceData} 
      technicians={technicianData}
      servicehistory={servicehistoryData}/>
    </React.StrictMode>
  );
}
loadInventory();

