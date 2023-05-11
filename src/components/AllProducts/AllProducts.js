// import React, { useEffect, useState,useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import products from '../products-data.json'
// import { productContext } from '../ProductContext';

// export default function AllProducts() {
//     const navigate = useNavigate();
//     const baseUrl = './images/';
//     const [arr, setArr] = useState([])
//     const prodCtx = useContext(productContext);
    
//     console.log(prodCtx)

//     useEffect(() => {
//         setArr(products);
//     }, []);
//     console.log(arr)
//     // setArr(products)
//     // useEffect(() => {
//     //     axios.get('src/components/ProductsData.json')
//     //         .then(data => {
//     //             console.log(data.products)
//     //             setArr(data.products);
//     //         })
//     //         .catch(error => { console.log(error) });
//     // },[]);
//     // useEffect(() => {
//     //     setData(prodCtx.products);
//     // }, []);
//     // useEffect(() => {
//     //     console.log("+++++++++++++" + prodCtx.products.length)
//     // }, [prodCtx.products]);
//     // useEffect(() => {
//     //     console.log("---------" + data)
//     // }, [data]);
//     // const clickMe = () => {
//     //     let array = [...prodCtx.products];
//     //     array.push({ name: '', description: 100, price: 'green',img:'' });
//     //     prodCtx.setProducts(array);
//     // }
//     return (
//         <div>
//             <h1>AllProducts</h1>

//             {
//                 products ?
//                     products.map((prod, index) =>
//                         <div className='card' key={index} onClick={() => { navigate(`/prod/${{prod}}`) }}>
//                             <img src={baseUrl + prod.imgName} className="card-img-top" />
//                             <div className="card-body">
//                                 <h5 className="card-title">{prod.name}</h5>
//                                 <p className="card-text">{prod.description}</p>
//                                 <p className="card-text">{prod.price}</p>
//                             </div>
//                         </div>
//                     )
//                     :
//                     <div>LOADING...</div>
//             }
//             {/* <button onClick={clickMe}>CLick me</button> */}

//         </div>
//     )
// }

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../ProductContext";
import './AllProducts.css';
export default function AllProducts() {
  const navigate = useNavigate();
  const baseUrl = '../../assets/';
  const prodCtx = useContext(productContext);
console.log(prodCtx)
//   useEffect(() => {
//     console.log("products from context: ", prodCtx.productsArr);
//   }, [prodCtx.productsArr]);

  return (
    
    <div className="container">
      {/* <h1>AllProducts</h1> */}
      {prodCtx ? (
        prodCtx.map((prod, index) => (
          <div
            className="card shadow p-3 mb-5  rounded myCard"
            key={index}
            onClick={() => {
              navigate(`/productDetails/${JSON.stringify(prod)}`);
            }}
          >
            <img  src={require(`../../assets/${prod.img}.JPG`)} className="card-img-top" />
            {console.log(prod.img)}  
            <div className="card-body">
              <h5 className="card-title">{prod.name}</h5>
              {/* <p className="card-text">{prod.description}</p>
              <p className="card-text">{prod.price}</p> */}
            </div>
          </div>
        ))
      ) : (
        <div>LOADING...</div>
      )}
    </div>
    
  );
}
