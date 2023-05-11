import React, { useContext, useEffect, useState } from 'react';
import { productContext } from "../ProductContext";
import products from "../products-data.json";
import Form from 'react-bootstrap/Form';
import './ProductsTable.css';
export default function ProductsTable() {
    const prodCtx = useContext(productContext);
    const [allProducts, setAllProducts] = useState(prodCtx, []);
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", img: "default" });
    // useEffect(() => {
    //     setAllProducts(prodCtx);
    // }, [prodCtx]);
    // useEffect(() => {
    //     console.log("+++++++++++++" + prodCtx.products.length)
    // }, [prodCtx.products]);
    // useEffect(() => {
    //     console.log("---------" + data)
    // }, [data]);
    const addProduct = () => {
        // let array = [...prodCtx];
        // array.push(newProduct);
        setAllProducts([...allProducts, newProduct]);
        // e.preventDefault();
        products.push(newProduct);
    }
    return (
        <div>
            {<table className="table table-primary table-striped table-bordered  ">
                <tbody>
                    <tr className="border border-2 border-primary">
                        <th className="border border-2 border-primary">שם</th>
                        <th className="border border-2 border-primary">תאור</th>
                        <th className="border border-2 border-primary">מחיר</th>
                        <th className="border border-2 border-primary">תמונה</th>
                    </tr>
                    {allProducts.map((x, index) => (
                        <tr key={index} className="border border-2 border-primary">
                            <td className="border border-2 border-primary"><input type="text" value={allProducts[index].name} onChange={(e) => {
                                const updatedProducts = [...allProducts];
                                updatedProducts[index] = { ...updatedProducts[index], name: e.target.value };
                                setAllProducts(updatedProducts);
                                prodCtx[index].name = e.target.value;
                            }} /></td>
                            <td className="border border-2 border-primary"><input type="text" value={x.description} onChange={(e) => {
                                const updatedProducts = [...allProducts];
                                updatedProducts[index] = { ...updatedProducts[index], description: e.target.value };
                                setAllProducts(updatedProducts);
                                prodCtx[index].description = e.target.value
                            }} /></td>
                            <td className="border border-2 border-primary"><input type="number" value={x.price} onChange={(e) => {
                                const updatedProducts = [...allProducts];
                                updatedProducts[index] = { ...updatedProducts[index], price: e.target.value };
                                setAllProducts(updatedProducts);
                                prodCtx[index].price = e.target.value
                            }} /></td>
                            <td className="border border-2 border-primary"><input type="url" value={x.img} onChange={(e) => {
                                const updatedProducts = [...allProducts];
                                updatedProducts[index] = { ...updatedProducts[index], img: e.target.value };
                                setAllProducts(updatedProducts);
                                prodCtx[index].img = e.target.value
                            }} /></td>
                        </tr>))}
                </tbody>
            </table>}


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{height:"5%",border:"2px solid black",borderRadius:" 16px",backgroundColor: "lightblue", padding: "1%"}}>
                    <h3>הוספת פרס חדש</h3>
                    <div className="input-group mb-3">
                        <label className="p-2">שם</label>
                        <input type="text" name="n" className="form-control" onChange={(e) => { setNewProduct({ ...newProduct, name: e.target.value }) }} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="p-2">תאור</label>
                        <input type="text" name="d" className="form-control" onChange={(e) => { setNewProduct({ ...newProduct, description: e.target.value }) }} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="p-2">מחיר</label>
                        <input type="number" name="p" className="form-control" onChange={(e) => { setNewProduct({ ...newProduct, price: e.target.value }) }} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="p-2">תמונה</label>
                        <input type="url" name="i" className="form-control" onChange={(e) => { setNewProduct({ ...newProduct, img: e.target.value }) }} />
                    </div>
                    <button className="btn btn-primary mb-1" onClick={addProduct}>CLick me</button>
                </div>
            </div>
        </div>
    )
}
        //         prodCtx.products.length ?
        //         prodCtx.products.map((x, index) =>
        //                 <div className='card' key={index} onClick={() => {
        //                     navigate(`/item/${index}/${x.name}`)
        //                 }}>
        //                     {x.name}
        //                 </div>
        //             )
        //             :
        //             <div>LOADING...</div>
        //     }
        //     <button onClick={clickMe}>CLick me</button>

        // </div>

