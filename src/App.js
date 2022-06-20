import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboards from "./components/Dashboard";
import Pin from "./components/Pinmap";
import Nav from "./layouts/Navbar";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Nav /> } />
          <Route index element={ <Dashboards/> } />
          <Route path='Dashboard' element={ <Dashboards/> } />
          <Route path='Pinmap' element={ <Pin/> } />
          <Route path='*' element={ <Navigate replace to="/"/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
