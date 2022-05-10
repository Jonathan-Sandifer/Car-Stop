import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadManufacturer() {
  let manufacturerData = [];
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/");

  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
    console.log('manufacturer data: ', manufacturerData)
  } else {
    console.error(manufacturerResponse);
  }



  root.render(
    <React.StrictMode>
      <App manufacturers={manufacturerResponse.ok ? manufacturerData : []} />
    </React.StrictMode>
  );
}
loadManufacturer();
