import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
