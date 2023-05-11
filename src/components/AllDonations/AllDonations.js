import React, { useState } from 'react';
import donations from '../donationData'
export default function AllDonations(props) {
    // useEffect(() => {
    //     setAllProducts(prodCtx);
    // }, [prodCtx]);
    // useEffect(() => {
    //     console.log("+++++++++++++" + prodCtx.products.length)
    // }, [prodCtx.products]);
    // useEffect(() => {
    //     console.log("---------" + data)
    // }, [data]);
    console.log(donations);
    return (
                <table className="table table-primary table-striped table-bordered ">
                    <tbody>
                    <tr className="border border-2 border-primary">
                        <th className="border border-2 border-primary">שם התורם</th>
                        <th className="border border-2 border-primary">שם הפרס</th>
                        <th className="border border-2 border-primary">מספר כרטיסים</th>
                        <th className="border border-2 border-primary">סכום התרומה</th>                      
                    </tr>
                    {donations.map((x, index) => (
                        <tr key={index} className="border border-2 border-primary">
                            <td className="border border-2 border-primary">{x.userName} </td>
                            <td className="border border-2 border-primary">{x.prizeName}</td>
                            <td className="border border-2 border-primary">{x.ticketsNum}</td>
                            <td className="border border-2 border-primary">{x.donationSum}</td>
                        </tr>))}
                        </tbody>
                </table>
)
}
