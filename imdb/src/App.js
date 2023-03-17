import './App.css';
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites'
import Login from "./components/login/login";
import Register from "./components/register/register";
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          user && user._id ? (<>      <NavBar></NavBar> <Banner /><Movies user={user} /></>) : (<Login setLoginUser={setLoginUser}/>)
        }/>
        <Route path="/favourites" element={<>       <NavBar></NavBar> <Favourites user={user} /></>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
