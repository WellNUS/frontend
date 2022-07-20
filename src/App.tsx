import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { saveState } from './state/browserStorage';

import Home from './views/pages/home/Home';
import Dashboard from './views/pages/dashboard/Dashboard';
import Login from './views/pages/authentication/Login';
import Register from './views/pages/authentication/Register';
import Profile from './views/pages/profile/Profile';
import Groups from './views/pages/groups/Groups';
import Group from './views/pages/groupRoom/GroupRoom';
import JoinGroup from './views/pages/join/JoinGroup';
import Match from './views/pages/match/Match';

import "./global.css";
import Counsel from './views/pages/counsel/Counsel';

// Ensure that redux state changes will be saved into sessionStorage.
store.subscribe(
  () => {saveState(store.getState());}
);


const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Groups />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:group_id" element={<Group />} />
            <Route path="/join" element={<JoinGroup />} />
            <Route path="/counsel" element={<Counsel />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
