import logo from './logo.svg';
import './App.css';
import MyRoutes from './components/MyRoutes/MyRoutes';
import Login from './components/Login/Login';
import { useState } from 'react';
import Donation from './components/Donation/Donation';
function App() {
  const[isLogin,setIsLogin]=useState(false);
   return (
  <div className="App">
  {!isLogin?<Login setIsLogin={setIsLogin}/>:
  <MyRoutes  setIsLogin={setIsLogin}/>
} 
  </div>)
}

export default App;
