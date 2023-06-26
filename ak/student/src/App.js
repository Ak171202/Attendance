
import './App.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Student from './Student';
import Addstu from './Addstu';

function App() {
  return (

    <div>

      <BrowserRouter>

        <Topbar />
        <div class="container-fluid page-body-wrapper">

          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student" element={<Student />} />
            <Route path="/add" element={<Addstu />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>

  );
}

export default App;
