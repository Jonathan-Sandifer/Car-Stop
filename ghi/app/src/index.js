import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let automobileData, manufacturerData;
  const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/");

  if (automobileResponse.ok) {
    automobileData = await automobileResponse.json();
    console.log('automobile data: ', automobileData)
  } else {
    console.error(automobileResponse);
  }
  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
    console.log('manufacturer data: ', manufacturerData)
  } else {
    console.error(manufacturerResponse);
  }
  root.render(
    <React.StrictMode>
      <App automobiles={automobileData} manufacturers={manufacturerData} />
    </React.StrictMode>
  );
}
loadInventory();