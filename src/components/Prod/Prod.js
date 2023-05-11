import React from 'react';
import { useParams } from 'react-router-dom';
// import './Login.css'
export default function Prod() {
    const {  name,description,price,img } = useParams();
    return (
        // <div>
        //     <h1>{name}</h1>
        //     <h1>{description}</h1>
        //     <h1>{price}</h1>
        //     <img src={img}></img>
        // </div>
        <h1>hello</h1>
    );
}