import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from 'react';

function FormPg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // submit 
    const Submit = () => {
        console.log("dataaaa", name, email, password)
        if (password == confirmPassword) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            };
            fetch('http://localhost:8001/submit', requestOptions)
                .then(response => response.json())
                .then(data => console.log("submit data", data));
        }
        else {
            console.log("confirm password not match")
        }
    }

    return (
        <div>
            <h2 className='mainHeading'>
                FORM {' '}
                {/* <span className='sp'>Clients</span> */}
            </h2>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={() => Submit()} variant="dark" >
                    Signup
                </Button>
            </Form>
        </div >
    );
}

export default FormPg;
