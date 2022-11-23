import '../App.css'
import React, { useEffect, useState } from 'react';
import { Button, Row, Card, Navbar, Nav, Container, Form, Col} from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai"
import { motion, useAnimation } from "framer-motion"
import InView, { useInView } from "react-intersection-observer"
import ScrollAnimation from "react-animate-on-scroll";



function Cards() {

  const [refFeatured, inViewFeatured] = useInView({ threshold: 0.7 })
  const [refLatest, inViewLatest] = useInView({ threshold: 0.7 })
  const animationFeatured = useAnimation()
  const animationLatest = useAnimation()

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

      {/* Card */}
      <div style={{ width: "100%", height: "40px", textAlign: "center", marginTop: "5%" }}>
        <span className="heading"> Featured Products </span>

      </div>
      <div className="Featured" ref={refFeatured} style={{ textAlign: "-webkit-center" }}  >
        <Row
          xs={2}
          s={2}
          md={4}
          l={5}
          className="g-3"
          style={{
            marginTop: "5%",
            marginBottom:"5%"
          }}
        >
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
        </Row>
      </div>
      <div style={{ width: "100%", height: "40px", textAlign: "center", marginTop: "5%" }}>
        <span className="heading"> Latest Products </span>

      </div>
      <div className="Latest" ref={refLatest} style={{ textAlign: "-webkit-center" }}  >
        <Row style={{ width: "90% !important", marginTop: "5%",marginBottom:"5%" }}
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
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "-200vw" }}
            animate={animationFeatured}
          >
            <a style={{ textDecoration: 'none', cursor: "pointer" }}>
              <Card className="Product-Card" >
                <div className="insideCard">
                  <Card.Img style={{ padding: "5%" }} variant="top" src="https://sportsnsports.pk/wp-content/uploads/2020/09/2018-world-cup-football-blue-white-300x300.jpg" />
                </div>
                <div style={{ height: "35%" }}>
                  <Card.Body >
                    <Card.Title>FootBall
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ textAlign: "start", color: "red" }}>Price:  $313.78</h5>
                    </Card.Text>
                    <Button variant="dark" style={{ width: "100%",backgroundColor:"#5D20D9" }} >Add to Cart</Button>
                  </Card.Body>
                </div>
                <div className='lineCard' >
                </div>
              </Card>
            </a>
          </motion.div>
        </Row>
      </div>
    </>
  );
}

export default Cards;
