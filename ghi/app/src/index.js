import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let automobileData, manufacturerData, vehicleModelData, salesRecordData, serviceData, technicianData;
  const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/");
  const vehicleModelResponse = await fetch("http://localhost:8100/api/models/");
  const salesRecordResponse = await fetch("http://localhost:8090/api/sales_record/");
  const technicianResponse = await fetch("http://localhost:8080/api/technician/");
  // const serviceResponse = await fetch("http://localhost:8080/api/service/")


  if (automobileResponse.ok) {
    automobileData = await automobileResponse.json();
    // console.log('automobile data: ', automobileData)
  } else {
    console.error(automobileResponse);
  }
  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
    // console.log('manufacturer data: ', manufacturerData)
  } else {
    console.error(manufacturerResponse);
  }
  if (vehicleModelResponse.ok) {
    vehicleModelData = await vehicleModelResponse.json();
    // console.log('vehicle model data:', vehicleModelData)
  } else {
    console.error(vehicleModelResponse);
  }
  if (salesRecordResponse.ok) {
    salesRecordData = await salesRecordResponse.json();
    // console.log(salesRecordData);
  } else {
    console.error(salesRecordResponse);
  }
  if (technicianResponse.ok) {
    technicianData = await technicianResponse.json();
    // console.log(technicianData);
  } else {
    console.error(technicianResponse);
  }
  // if (serviceResponse.ok) {
  //   serviceData = await serviceResponse.json();
  //   // console.log(serviceData);
  // } else {
  //   console.error(serviceResponse);
  // }
  root.render(
    <React.StrictMode>
      <App automobiles={automobileData} 
      manufacturers={manufacturerData} 
      vehicleModel={vehicleModelData} 
      salesRecord={salesRecordData} 
      // service={serviceData} 
      technician={technicianData}/>
    </React.StrictMode>
  );
}
loadInventory();

