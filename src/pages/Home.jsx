import { useState } from "react";
import React from "react";

import Chat from "../components/Chat/Chat";
import "../sass/layout/layout.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { plans } from "../modules/options";
import Plan from "./Subscription/Plan";

import SectionIntro from "../components/SectionsHome/SectionIntro";
import SectionManifesto from "../components/SectionsHome/SectionManifesto";
import SectionManifestoDk from "../components/SectionsHome/SectionManifestoDk";
import SectionWorks from "../components/SectionsHome/SectionWorks";
import Footer from "../components/Footer/Footer";
import SectionTestimonial from "../components/SectionsHome/SectionTestimonial";
import SectionNewsletter from "../components/SectionsHome/SectionNewsletter";
import SectionIG from "../components/SectionsHome/SectionIG";
import SectionCarousel from "../components/SectionsHome/SectionCarousel";
import Header from "../components/Header/Header";

export default function Home(props) {
  // const [isOnScroll, setIsOnScroll] = useState(false);
  const [x, setX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const handleEvent = () => {
    setOffsetY(window.pageYOffset);
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleEvent);
  //   return () => {
  //     window.removeEventListener("scroll", handleEvent);
  //   };
  // }, []);

  // window.addEventListener("scroll", handleScroll);

  let top = window.pageYOffset;

  const body = document.body,
    html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let y;
  // console.log(top);
  // console.log(height);

  // function handleScroll(e, animationEnds) {
  //   // console.log("handleScroll");
  //   window.removeEventListener("scroll", handleScroll);
  //   if (animationEnds) {
  //     setIsOnScroll(false);
  //     window.addEventListener("scroll", handleScroll);
  //   } else {
  //     window.removeEventListener("scroll", handleScroll);
  //     setIsOnScroll(true);
  //     y = 2;
  //     if (window.pageYOffset > top) {
  //       setX(x + y);
  //       top = window.pageYOffset;
  //     } else {
  //       setX(x - y);
  //       top = window.pageYOffset;
  //     }
  //   }
  // }
  // ;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const plansList = plans.map((plan, i) => <Plan key={`plan-${i + 1}`} plan={plan} />);

  return (
    <div className="Home">
      <Header />
      <div className="layout">
        <SectionIntro />
        <SectionWorks />
        <Container className="mb-5">
          <Row>{plansList}</Row>
        </Container>
        <SectionManifesto className="manifesto_mobile" />
        <SectionManifestoDk className="manifesto_desktop" />
        <SectionCarousel />
        <SectionTestimonial />
        <SectionNewsletter heading="Receive 10% off your first order when you sign up for our newsletter." />
        <SectionIG />
      </div>
      <div className="floating_actions">
        <Chat />
        <Button className="co2_button" variant="primary" onClick={handleShow}>
          this website <br /> only emites <br />
          0.49g of CO2
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Minimizing our footprint, also digitally</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="left">
              <p> Our webpage has a carbon footprint of x CO2, calculated through the Website Carbon Calculator (https://www.websitecarbon.com).</p>
              <br />
              <p> A regular website has an average of x CO2. This means we are using 80% less CO2 than the average website.</p>
              <br />
              <p>If you would like more info about how you can reduce your digital footprint, feel free to reach out to us via info@littlessentials.dk and we’ll be happy to share what we know with you.</p>
            </div>
            <div className="right">
              <div className="info_1">
                <h2>80%</h2>
                <p>less C02</p>
              </div>
              <div className="info_2">
                <h2>0.231g</h2>
                <p>of CO2 per visit</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <p>Every small change starts with a seed of awareness.</p>
            <Link to="lowcarbon">
              <Button variant="primary">Learn more</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}
