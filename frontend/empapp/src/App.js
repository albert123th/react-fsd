
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbarr from './Component/Navbarr';

import AddEmployee from './Component/AddEmployee';
import ViewEmployee from './Component/ViewEmployee';



function App() {
  return (
    <div className="App">
      <Navbarr/>
      

<Routes>

  <Route path='/' element={<ViewEmployee/>}/>

  <Route path='/add' element={<AddEmployee/>} />

</Routes>
    </div>
  );
}

export default App;

