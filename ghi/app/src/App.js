import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './AutomobileList';
// import AutomobileForm from './AutomobileForm';
import ManufacturerList from './ListManufacturer';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={props.automobiles} />}/>
            {/* <Route path="new" element={<AutomobileForm />}/> */}
          </Route>
          <Route path="/manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
