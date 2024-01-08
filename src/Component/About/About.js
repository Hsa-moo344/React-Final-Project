import React from "react";
import ProjectCss from "../../css/common.module.css";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-grid-system";
import Image2 from "../../Images/reponsibe.png";
import Image3 from "../../Images/love1.jpeg";
import Image4 from "../../Images/diamond.jpg";
import Image5 from "../../Images/support.png";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className={ProjectCss.AboutMain}>
        <h1>About the Coding</h1>
        <h3>Key Feature of our coding</h3>
        <Row>
          <Col sm={3}>
            <img src={Image2} />
            <h4 style={{ color: "blue" }}>Learning coding</h4>
            <p className={ProjectCss.BodyText}>
              Interested in learning how to code, but unsure where to start?
              This path provides an overview of the main branches of
              programming: computer science, web development, and data science.
              It teaches important concepts you’ll find in every coding
              language, such as variables, functions, and control flow. Take
              this path to understand key programming terms and chart your
              course to a more technical career.
            </p>
          </Col>
          <Col sm={3}>
            <img src={Image3} style={{ width: "250px", height: "150px" }} />
            <h4 style={{ color: "blue" }}> Passion</h4>
            <p className={ProjectCss.BodyText}>
              Passionate love and compassionate love are both important and tend
              to take center stage during different relationship stages.
              Passionate love often emerges during the earliest time in a
              relationship, when that early spark helps people forge a
              connection. As a relationship matures, passionate love diminishes
              somewhat, and more compassionate love takes hold.
            </p>
          </Col>
          <Col sm={3}>
            <img src={Image4} style={{ width: "250px", height: "150px" }} />
            <h4 style={{ color: "blue" }}> Diamond</h4>
            <p className={ProjectCss.BodyText}>
              Diamond is a solid form of the element carbon with its atoms
              arranged in a crystal structure called diamond cubic. Another
              solid form of carbon known as graphite is the chemically stable
              form of carbon at room temperature and pressure, but diamond is
              metastable and converts to it at a negligible rate under those
              conditions. Diamond has the highest hardness and thermal
              conductivity of any natural material, properties that are used in
              major industrial applications such as cutting and polishing tools.
              They are also the reason that diamond anvil cells can subject
              materials to pressures found deep in the Earth.
            </p>
          </Col>
          <Col sm={3}>
            <img src={Image5} style={{ width: "250px", height: "150px" }} />
            <h4 style={{ color: "blue" }}>Support</h4>
            <p className={ProjectCss.BodyText}>
              The Home Office had set up its own Research Unit in 1957, in
              addition to supporting criminological research in the universities
              and elsewhere. • The Regulations themselves set out only the main
              performance criteria with the technical detail set out in
              supporting documents. • The World Cup Final in Rome will attract a
              worldwide audience of nearly one billion, the largest for any
              supporting event. • History books have their main ideas,
              supporting evidence and factual details arranged in a particular
              manner.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
