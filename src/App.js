import "../src/css/App.css"
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import { selectUsers } from './store/usersSlice.jsx';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUsers);

  return (
    <>  
     {user.currentUser ? 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home  />} />
          <Route path="/PGCBT" element={<Home  />} />
        </Routes>
      </BrowserRouter>
      :
      <LoginPage />
    }
      
        
    </>
  )
}

export default App

