import React from 'react';
// import Button from '@material-ui/core/Button';
import { Button, Row, Card, Navbar, Nav, Container, Form, Col} from "react-bootstrap";

import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'

const Footer = () => {

    return (
        <Container fluid className="Footer">
            <Row >
                <Col sm={4} m={4} >
                    <div  >
                        <h2 style={{color:"white"}}>Top Categories</h2>
                        <ul>
                            <li style={{ textDecoration: "none", color: "white" }} >FootBall 1</li>
                            <li style={{ textDecoration: "none", color: "white" }} >FootBall 2</li>
                            <li style={{ textDecoration: "none", color: "white" }} >FootBall 3</li>
                            <li style={{ textDecoration: "none", color: "white" }} >FootBall 4</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={4} m={4}>
                    <div className="ResponseFoot" >
                        <h2 style={{color:"white"}}>Response</h2>
                        <Row style={{ paddingTop: "5%" }}>
                            <Form style={{ display: "flex", justifyContent: "space-around", paddingLeft: 0 }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Button style={{ backgroundColor: "#5D20D9", height: "70%",color:"white" }} variant="flat" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Row>
                    </div>
                </Col >
                <Col sm={4} m={4}>
                    <div className="SocialMediaIcons" >
                        <h2 style={{color:"white"}}>Social Media</h2>
                        <ul>
                            <li><UseAnimations strokeColor='#5D20D9' speed={2} animation={facebook} size={56} /></li>
                            <li> <UseAnimations strokeColor='#5D20D9' speed={2} animation={instagram} size={56} /></li>
                            <li> <UseAnimations strokeColor='#5D20D9' speed={2} animation={twitter} size={56} /></li>
                            <li><UseAnimations strokeColor='#5D20D9' speed={2} animation={linkedin} size={56} />
                            </li>


                        </ul>

                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer





