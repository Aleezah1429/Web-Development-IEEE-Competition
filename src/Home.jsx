import './App.css';
import React, { useEffect, useState } from 'react';
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { HiOutlineUserAdd, HiOutlineShoppingCart } from "react-icons/hi";
import { Button, Row, Card, Navbar, Nav, Container, Form, Col} from "react-bootstrap";
import Logo from "./assets/logo2.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai"
import { motion, useAnimation } from "framer-motion"
import InView, { useInView } from "react-intersection-observer"
import ScrollAnimation from "react-animate-on-scroll";
// import "./animate.css"

import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'



function Home() {

  const [refFeatured, inViewFeatured] = useInView({ threshold: 0.7 })
  const [refLatest, inViewLatest] = useInView({ threshold: 0.7 })
  const animationFeatured = useAnimation()
  const animationLatest = useAnimation()
  const [productsFeature, setProductsFeature] = useState([])
  const [productsLatest, setProductsLatest] = useState([])

  useEffect(() => {
    if (inViewFeatured) {
      animationFeatured.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.5
        }


      })
    }

    if (inViewLatest) {
      animationLatest.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.5
        }


      })
    }

  })

  return (
    <>
      {/* Navbar */}
      <Row>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="sm"
          style={{ backgroundColor: "#0e0e0f", opacity: 0.95 }}
          variant="dark"
        >
          <Container fluid>

            <Navbar.Brand
              href="/"
              style={{ width: "13%" }}
            >

              <img
                src={Logo}
                style={{ height: "2.5em", width: "7em" }}
                className="d-inline-block top-align"
              // alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="navLinks" href="/category/Memories">Memory</Nav.Link>
                <Nav.Link className="navLinks" href="/category/HardDrives">Hardrive</Nav.Link>
                <Nav.Link className="navLinks" href="/category/SSDs">SSDs</Nav.Link>
                <Nav.Link className="navLinks" href="/categories">All Categories</Nav.Link>
                <Nav.Link className="navLinks" href="/contact">Contact us</Nav.Link>
                <Nav.Link className="navLinks" href="/about">About us</Nav.Link>
              </Nav>

              <>
                <Button
                  style={{ marginRight: "1%" }}
                  variant="outline-secondary"
                >
                  <HiOutlineShoppingCart size={20} />
                </Button>

                <Button
                  style={{ marginRight: "1%" }}
                  variant="outline-secondary"
                >
                  <BiLogOut size={20} />
                </Button>
              </>

              <>
                <Button
                  style={{ marginRight: "1%" }}
                  variant="outline-secondary"
                >
                  <HiOutlineUserAdd size={20} />
                </Button>
                <Button
                  variant="outline-secondary"
                >
                  <BiLogIn size={20} />
                </Button>
              </>
            </Navbar.Collapse>


          </Container>
        </Navbar>
      </Row>

      {/* GIF */}
      <Row  >
        <img className='HomeImg'
          src={"https://media2.giphy.com/media/3oKIPmHmREIV18Xtbq/giphy.gif"}
          // src={" https://media2.giphy.com/media/j0qclsfQMGBhaVvYGT/200.gif"}
          height="500px" />
        <div className='HomeBanner'>
          <h3 style={{ color: "white" }}>All Computer Parts Available at Reasonable Price</h3>
          <ScrollAnimation
            animateIn="flipInX"
            duration={2}
            delay={1}
          >
            <Button style={{ fontSize: "20px" }} variant="outline-secondary">Buy Our Products</Button>{' '}
          </ScrollAnimation>
        </div>
      </Row>
      {/* <ControlledCarousel/> */}
      <div style={{ width: "100%", height: "40px", textAlign: "center", marginTop: "5%" }}>
        <span className="heading"> Featured Products </span>

      </div>

      {/* Card */}
      <div className="Featured" ref={refFeatured} style={{ textAlign: "-webkit-center", }}  >
        <Row
          xs={2}
          s={2}
          md={4}
          l={5}
          className="g-3"
          style={{
            marginTop: "5%",
          }}
        >
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://www.memory4less.com/images/products/img0922a/641222-001-lg.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>AB322-60001
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <Row style={{ justifyContent: "end", marginTop: "4%" }}>
            <Button style={{ width: "12%" }} variant="dark">See more<AiOutlineArrowRight style={{ marginLeft: "10%" }} /> </Button>
          </Row>
        </Row>
      </div>
      <div style={{ width: "100%", height: "40px", textAlign: "center", marginTop: "5%" }}>
        <span className="heading"> Latest Products </span>

      </div>
      <div className="Latest" ref={refLatest} style={{ textAlign: "-webkit-center" }}  >
        <Row style={{ width: "90% !important", marginTop: "5%" }}
          xs={2}
          s={2}
          md={4}
          l={5}
          className="g-3"
        >

          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://www.memory4less.com/images/products/img0922a/641222-001-lg.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>AB322-60001
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <Row style={{ justifyContent: "end", marginTop: "4%" }}>
            <Button style={{ width: "12%" }} variant="dark">See more<AiOutlineArrowRight style={{ marginLeft: "10%" }} /> </Button>

          </Row>
        </Row>
      </div>

      {/* footer */}
      <Container fluid className="Footer">
        <Row >
          <Col sm={4} m={4} >
            <div  >
              <h2>Top Categories</h2>
              <ul>
                <li style={{ textDecoration: "none", color: "white" }} >Engineer</li>
                <li style={{ textDecoration: "none", color: "white" }} >Engineer</li>
                <li style={{ textDecoration: "none", color: "white" }} >Engineer</li>
                <li style={{ textDecoration: "none", color: "white" }} >Engineer</li>
              </ul>
            </div>
          </Col>
          <Col sm={4} m={4}>
            <div className="ResponseFoot" >
              <h2>Response</h2>
              <Row style={{ paddingTop: "5%" }}>
                <Form style={{ display: "flex", justifyContent: "space-around", paddingLeft: 0 }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Button style={{ backgroundColor: "#ff9902", height: "70%" }} variant="flat" type="submit">
                    Submit
                  </Button>
                </Form>
              </Row>
            </div>
          </Col >
          <Col sm={4} m={4}>
            <div className="SocialMediaIcons" >
              <h2>Social Media</h2>
              <ul>
                <li><UseAnimations strokeColor='#ff9902' speed={2} animation={facebook} size={56} /></li>
                <li> <UseAnimations strokeColor='#ff9902' speed={2} animation={instagram} size={56} /></li>
                <li> <UseAnimations strokeColor='#ff9902' speed={2} animation={twitter} size={56} /></li>
                <li><UseAnimations strokeColor='#ff9902' speed={2} animation={linkedin} size={56} />
                </li>


              </ul>

            </div>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Home;
