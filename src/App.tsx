import './App.css';

import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/pages/home/Home';
import Dashboard from './views/pages/dashboard/Dashboard';
import Login from './views/pages/authentication/Login';
import Register from './views/pages/authentication/Register';
import { ThemeProvider } from 'styled-components';
import Room from './views/pages/room/Room';

const theme = {
  main: "#ffb6c1"
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
