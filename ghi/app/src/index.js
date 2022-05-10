import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let automobileData, manufacturerData, vehicleModelData;
  const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/");
  const vehicleModelResponse = await fetch("	http://localhost:8100/api/models/");

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
    console.log('vehicle model data:', vehicleModelData)
  } else {
    console.error(vehicleModelResponse);
  }
  root.render(
    <React.StrictMode>
      <App automobiles={automobileData} manufacturers={manufacturerData} vehicleModel={vehicleModelData} />
    </React.StrictMode>
  );
}
loadInventory();






