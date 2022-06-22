import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { saveState } from './state/browserStorage';

import Home from './views/pages/home/Home';
import Dashboard from './views/pages/dashboard/Dashboard';
import Login from './views/pages/authentication/Login';
import Register from './views/pages/authentication/Register';
import Room from './views/pages/room/Room';
import Profile from './views/pages/profile/Profile';
import Groups from './views/pages/groups/Groups';
import Group from './views/pages/groups/group/GroupRoom';
import JoinGroup from './views/pages/groups/JoinGroup';
import Chat from './views/pages/chat/Chat';

// Ensure that redux state changes will be saved into sessionStorage.
store.subscribe(
  () => {saveState(store.getState());}
);


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
            <Route path="/profile" element={<Profile />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:group_id" element={<Group />} />
            <Route path="/join" element={<JoinGroup />} />
            <Route path="/groups/:group_id/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
