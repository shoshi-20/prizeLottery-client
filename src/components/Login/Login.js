import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'
// import './Login.css'
export default function Login(props) {

    var { setIsLogin } = props;
    // const [isLogin,SetIsLogin]= useState(props.SetIsLogin)
    const [user, setUser] = useState({ username: "", password: "", email: "", adress: "" })
    const [isExist, setIsExist] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/user/getAllUsers')
            .then(data => { console.log(data); setAllUsers(data.data); })
            .catch(error => { console.log(error) });
    }, []);

    const check = () => {
        console.log(user.username, user.password)
        axios.get(`http://localhost:4000/user/getUserByName/${user.username}`).then(data => {
            console.log(data);
            if (data.data) {
                if (data.data.password === user.password) {
                    setIsLogin(true);
                    localStorage.setItem('currentUser', JSON.stringify(data.data));
                    localStorage.setItem('isAdmin', JSON.stringify(data.data.__v));
                }
                else alert("wrong password!!!")
            }
            else {
                console.log("yes")
                setIsExist(true);
            }
        })
    }
    const addUser = () => {
        axios.post('http://localhost:4000/user/addUser', user)
            .then(data => {
                setAllUsers([...allUsers, data.data])
                console.log(data.data);
                console.log("adding user");
                setIsLogin(true);
                saveInLocalStorage();
            })
            .catch(() => console.log("error"))
    }

    const saveInLocalStorage = () => {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                isExist ?
                    <div className="login">
                        <div className="input-group mb-3 "><label className="p-2"> שם משתמש</label>
                            <input type="text" className="form-control" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
                        </div>

                        <div className="input-group mb-3"><label className="p-2">סיסמה</label>
                            <input type="password" className="form-control" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        </div>

                        <div className="input-group mb-3"><label className="p-2">כתובת</label>
                            <input className="form-control" type="text" onChange={(e) => { setUser({ ...user, adress: e.target.value }) }} />
                        </div>

                        <div className="input-group mb-3"><label className="p-2">מייל</label>
                            <input className="form-control" type="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                        </div>

                        <button className="btn btn-primary mb-3" onClick={addUser}>register</button>
                    </div>
                    : <div className="login">

                        <div className="input-group mb-3"> <input type="text" placeholder="user name" className="form-control" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} /></div>
                        <div className="input-group mb-3"> <input type="password" placeholder="password" className="form-control" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /></div>
                        <button className="btn btn-primary mb-1" onClick={check}>login</button>
                    </div>
            }

        </div>)
}