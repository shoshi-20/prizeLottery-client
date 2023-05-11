import React,{ useState } from 'react'
import MyRoutes from '../MyRoutes/MyRoutes';
import Login from '../Login/Login';
import AllProducts from '../AllProducts/AllProducts';

export default function Logout() {
  const[isLogin,SetIsLogin]=useState(false);
   return (
  <>
  {!isLogin?<Login SetIsLogin={SetIsLogin}/>:"<MyRoutes/>"}
  </>)
}

