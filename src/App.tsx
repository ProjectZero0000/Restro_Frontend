import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainPage from './pages/Main';
import Order from './pages/Main/Order';
import Dashboard from './pages/Main/Dashboard';
import Account from './pages/Main/Account';
import Table from './pages/Main/Table';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage/>}>
          <Route path="order" element={<Order />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="table" element={<Table />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
