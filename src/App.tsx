import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/pages/home/Home';
import Dashboard from './views/pages/dashboard/Dashboard';
import Login from './views/pages/authentication/Login';
import Register from './views/pages/authentication/Register';
import Room from './views/pages/room/Room';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
