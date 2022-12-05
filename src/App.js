import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './pages/Userlist';

function App() {
  return (
    <Routes>
      <Route path='' element={<Users/>} />
    </Routes>
  );
}

export default App;
