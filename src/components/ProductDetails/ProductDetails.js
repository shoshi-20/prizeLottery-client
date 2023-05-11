import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductDetails() {
    const navigate = useNavigate();
    const object = useParams();
    const product = JSON.parse(object.prod);
    return (
        <Card style={{width:"35%" ,margin:"0 auto"}} className="shadow p-2 mb-2  rounded border-primary ">
            <Card.Body>
            <h2><b>{product.name}</b></h2>
                <Card.Img src={require(`../../assets/${product.img}.JPG`)} width="40%" className=" border  mb-2  rounded"></Card.Img>
                 <Card.Subtitle><p>{product.description}</p></Card.Subtitle>
                <h1> {product.price} ₪</h1>
                <Button onClick={() => {
                        navigate(`/donation/${product.name}/${product.price}`);
                    }}>לתרומה</Button>
            </Card.Body>       
        </Card>
    );
}