import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadAutomobile() {
  let automobileData
  const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');

  if (automobileResponse.ok) {
    automobileData = await automobileResponse.json();
    console.log('automobile data: ', automobileData)
  } else {
    console.error(automobileResponse);
  }

  root.render(
    <React.StrictMode>
      <App automobiles={ automobileResponse.ok ? automobileData : [] } />
    </React.StrictMode>
  );
}
loadAutomobile();
