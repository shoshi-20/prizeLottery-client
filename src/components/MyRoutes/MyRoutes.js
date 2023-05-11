import React from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import './MyRoutes.css'
import App from "../../App";
import AllProducts from "../AllProducts/AllProducts";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import ProductDetails from "../ProductDetails/ProductDetails";
import Donation from "../Donation/Donation";
import UserProfile from "../UserProfile/UserProfile";
import AllDonations from "../AllDonations/AllDonations";
import ProductsTable from "../ProductsTable/ProductsTable";
import './MyRoutes.css';
export default function MyRoutes(props) {
    // var { SetIsLogin } = props;
    const navigate = useNavigate();
    const { setIsLogin } = props;
    const logout = () => {
        localStorage.removeItem("currentUser")
        setIsLogin(false)
    }
    return (
        <div>
            <nav className="topnav">
                <Link  to="/products">לכל המוצרים </Link>
                {/* <Link className="navbar-brand" to="/logout">Login</Link> */}
                {/* <Link className="navbar-brand" to="/donation">לתרומה</Link> */}
                <Link  to="/userProfile">פרטי משתמש</Link>
                {/* {localStorage.getItem('currentUser') && <li onClick={() => {
                        localStorage.removeItem('currentUser');
                        localStorage.removeItem('isAdmin');
                    }}><Link to="/login">להתנתקות</Link></li>} */}
                {localStorage.getItem('isAdmin') && <Link  to="/productsTable">לטבלת הפרסים</Link>}
                {localStorage.getItem('isAdmin') && <Link  to="/allDonations">לטבלת תרומות</Link>}
                <Link className="navbar-brand" onClick={logout} >Log-Out</Link>

            </nav>

            <Routes >
                <Route path="/app" element={<App />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productDetails/:prod" element={<ProductDetails />} />
                <Route path="/donation/:name/:price" element={<Donation />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/productsTable" element={<ProductsTable />} />
                <Route path="/allDonations" element={<AllDonations />} />
                <Route path="*" element={<AllProducts />} />
            </Routes>

        </div>
    )
}