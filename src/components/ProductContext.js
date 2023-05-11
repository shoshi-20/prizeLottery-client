// import React, { createContext, useState, useEffect } from "react";
// import axios from 'axios';
// import products from './products-data.json';
// export const productContext = createContext();

// export default function ProductContext(props) {

//     const [productsArr, setProductsArr] = useState(products);
//     useEffect(() => {
//         axios.get('./products-data.json')
//             .then(data => {
//                 console.log(data)
//                 setProductsArr(data.data);
//             })
//             .catch(error => {
//                 console.log(error)
//             });
//     },[]);

//     return (
//         <productContext.Provider value={{ productsArr, setProductsArr }}>
//             {props.children}
//         </productContext.Provider>
//     );
// }

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import products from "./products-data.json";
import AllProducts from './AllProducts/AllProducts';
export const productContext = createContext(products);

export default function ProductContext(props) {
  const [productsArr, setProductsArr] = useState(products);

  useEffect(() => {
    // setProductsArr(products);
    
    
    axios.get("./products-data.json")
      .then((response) => {
        console.log("response data: ", response.data);
        setProductsArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    

  }, []);

  return (
    <productContext.Provider value={{ productsArr , setProductsArr }}>
{/* <AllProducts/> */}
      {props.children}
    </productContext.Provider>
  );
}
