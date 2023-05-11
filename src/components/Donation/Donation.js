import React, { } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import products from "../products-data.json";
import donations from '../donationData'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Donation.css';
export default function Donation() {
    const { name, price } = useParams();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(price)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            userName: currentUser ? currentUser.username : "",
            id: '',
            adress: currentUser ? currentUser.adress : "",
            mail: currentUser ? currentUser.email : "",
            ticketsNum: 1,
            creditNum: '',
            creditExpire: '',
            cvv: '',
            prizeName: name,
            donationSum: price
        },
    }
    );
    const onSubmit = (data) => {
        data.prizeName = name;
        data.donationSum = price * watch("ticketsNum");
        donations.push(data)
        console.log(donations)
        navigate(`/products`);
    };

    return (
        <div style={{ width: "95%", padding: "1%", margin: "2%" }} className="border border-primary rounded">
            {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> */}
            <Form onSubmit={handleSubmit(onSubmit)} className="myForm">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: "25%", padding: "1%", margin: "2%" }} className="border border-primary rounded">
                        <h3 style={{ color: "blue" }}>פרטים אישיים</h3>
                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label  >שם משתמש</Form.Label>
                            <Form.Control name="un" style={{ width: "90%", margin: "0 auto" }}
                                {...register("userName", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-zא-ת]+$/i,
                                })}
                            />
                            {errors?.userName?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {errors?.userName?.type === "maxLength" && (<p style={{ color: "red" }}>שם אינו יכול להכיל יותר מעשרים תווים</p>)}
                            {errors?.userName?.type === "pattern" && (<p style={{ color: "red" }} className="errorMsg">שם יכול להכיל אותיות בלבד</p>)}
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label >תעודת זהות</Form.Label>
                            <Form.Control name="i" style={{ width: "90%", margin: "0 auto" }}
                                {...register("id", {
                                    required: true,
                                    maxLength: 9,
                                    minLength: 9
                                })}
                            />
                            {errors?.id?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {(errors?.id?.type === "maxLength" || errors?.id?.type === "minLength") && (<p style={{ color: "red" }}>תעודת זהות חייבת להכיל תשע ספרות בדיוק</p>)}
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label >מייל</Form.Label>
                            <Form.Control name="m" style={{ width: "90%", margin: "0 auto" }}
                                {...register("mail", {
                                    required: true,
                                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                })}
                            />
                            {errors?.mail?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {errors?.mail?.type === "pattern" && (<p style={{ color: "red" }}>מייל לא תקין!</p>)}
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>כתובת</Form.Label>
                            <Form.Control name="un" style={{ width: "90%", margin: "0 auto" }}
                                {...register("adress", {
                                    required: true,
                                    maxLength: 30,
                                    pattern: /^[A-Za-zא-ת0-9 ]+$/i,
                                })}
                            />
                            {errors?.adress?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {errors?.adress?.type === "maxLength" && (<p style={{ color: "red" }}>כתובת אינה יכולה להכיל יותר משלושים תווים</p>)}
                            {errors?.adress?.type === "pattern" && (<p style={{ color: "red" }}>כתובת לא תקינה</p>)}
                        </Form.Group>
                    </div>

                    <div style={{ width: "25%", padding: "1%", margin: "2%" }} className="border border-primary rounded">
                        <h3 style={{ color: "blue" }}>פירוט כרטיסי הגרלה</h3>
                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>שם הפרס</Form.Label>
                            <Form.Control name="pn" style={{ width: "90%", margin: "0 auto" }}
                                {...register("prizeName", { disabled: true, value: name })} />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>סכום התרומה</Form.Label>
                            <Form.Control name="ds" style={{ width: "90%", margin: "0 auto" }}
                                {...register("donationSum", { disabled: true, value: price })}
                            />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>מספר כרטיסים</Form.Label>
                            <Form.Control name="tn" type="number" style={{ width: "90%", margin: "0 auto" }}
                                min="1"{...register("ticketsNum", { value: 1, })}
                                onClick={() => { setValue("donationSum", `${price * watch('ticketsNum')}`) }}
                            />
                        </Form.Group>
                    </div>
                    <div style={{ width: "25%", padding: "1%", margin: "2%" }} className="border border-primary rounded">
                        <h3 style={{ color: "blue" }}>פרטי אשראי</h3>
                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>מספר אשראי</Form.Label>
                            <Form.Control name="cn" style={{ width: "90%", margin: "0 auto" }}
                                {...register("creditNum", {
                                    required: true,
                                    minLength: 16,
                                    maxLength: 16,
                                })}
                            />
                            {errors?.creditNum?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {(errors?.creditNum?.type === "maxLength" || errors?.creditNum?.type === "minLength") && (<p style={{ color: "red" }}>מספר אשראי חייב להכיל 16 ספרות</p>)}
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>תוקף אשראי</Form.Label>
                            <Form.Control name="ce" style={{ width: "90%", margin: "0 auto" }}
                                {...register("creditExpire", {
                                    required: true,
                                    minLength: 4,
                                    maxLength: 4,
                                })}
                            />
                            {errors?.creditExpire?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {(errors?.creditExpire?.type === "maxLength" || errors?.creditExpire?.type === "minLength") && (<p style={{ color: "red" }}>תוקף אשראי חייב להכיל 4 ספרות</p>)}
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label>cvv</Form.Label>
                            <Form.Control type="number" name="cv" style={{ width: "90%", margin: "0 auto" }}
                                {...register("cvv", {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 3,
                                    // pattern: /0-9/                    
                                })}
                            />
                            {errors?.cvv?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
                            {/* {(errors?.cvv?.type === "minLength")||(errors?.cvv?.type === "maxLength") && <p>חובה שיהיו 3 ספרות</p>} */}
                            {(errors?.cvv?.type === "pattern") && (<p style={{ color: "red" }}>הספרות לא תקינות</p>)}
                        </Form.Group>
                    </div>
                </div>
                <Button type="submit">לתשלום</Button>
            </Form>
        </div>
    );
}
