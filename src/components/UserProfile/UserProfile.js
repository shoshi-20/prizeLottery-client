import React, { useState } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
// import './Login.css'
export default function UserProfile() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')))
    function updateUser() {
        axios.post('http://localhost:4000/user/addUser', user);
        localStorage.setItem('currentUser', JSON.stringify(user))
        console.log(localStorage.getItem('currentUser'))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{width: "50%",border:"2px solid black",borderRadius:" 16px", margin: '15%',backgroundColor: "lightblue", padding: "5%"}}>

            <div className="input-group mb-3 ">
                <label className="p-2">שם משתמש</label>
                <input type="text" value={user.username} className="form-control" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
            </div>

            <div className="input-group mb-3 ">
                <label className="p-2">סיסמה</label>
                <input type="password" value={user.password} className="form-control" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
            </div>

            <div className="input-group mb-3 ">
                <label className="p-2">כתובת</label>
                <input type="text" value={user.adress} className="form-control" onChange={(e) => { setUser({ ...user, adress: e.target.value }) }} />
            </div>

            <div className="input-group mb-3 ">
                <label className="p-2">מיל</label>
                <input type="email" value={user.email} className="form-control" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
            </div>

            <button className="btn btn-primary mb-3" onClick={updateUser}>לעדכון</button>
            </div>
        </div>
    )
}