import React from "react";
import ProjectCss from "../../css/common.module.css";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-grid-system";
import Image2 from "../../Images/reponsibe.png";
import Image3 from "../../Images/love1.jpeg";
import Image4 from "../../Images/diamond.jpg";
import Image5 from "../../Images/support.png";
import Team from "../../Images/team.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className={ProjectCss.MainContext}>
        <h1>Start something that matters</h1>
        <h3>Stop wasting valuable time with projects that just isn't you</h3>
        <button>
          <a href="https://www.w3schools.com/">Learn more and start today</a>
        </button>
        <div className={ProjectCss.MainIcons}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      {/* About session */}
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
            <img src={Image3} style={{ width: "275px", height: "150px" }} />
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
            <img src={Image4} style={{ width: "275px", height: "150px" }} />
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
            <img src={Image5} style={{ width: "275px", height: "150px" }} />
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
      {/* Team session */}
      <div className={ProjectCss.CodingTeam}>
        <h2>The Team</h2>
        <p>This is our team</p>
        <Row>
          <Col sml={3}>
            <img src={Team} style={{ width: "200px", height: "180px" }} />
            <p>Coding Team</p>
            <p>Take photo by John Doe</p>
            <p
              style={{
                backgroundColor: "grey",
                padding: "10px",
                width: "80%",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ cursor: "pointer", color: "pink" }}
              />{" "}
              Contact
            </p>
          </Col>
          <Col sml={3}>
            <img src={Team} style={{ width: "200px", height: "180px" }} />
            <p>Coding Team</p>
            <p>Take photo by John Doe</p>
            <p
              style={{
                backgroundColor: "grey",
                padding: "10px",
                width: "80%",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ cursor: "pointer", color: "pink" }}
              />
              Contact
            </p>
          </Col>
          <Col sml={3}>
            <img src={Team} style={{ width: "220px", height: "180px" }} />
            <p>Coding Team</p>
            <p>Take photo by John Doe</p>
            <p
              style={{
                backgroundColor: "grey",
                padding: "10px",
                width: "80%",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ cursor: "pointer", color: "pink" }}
              />
              Contact
            </p>
          </Col>
          <Col sml={3}>
            <img src={Team} style={{ width: "220px", height: "180px" }} />
            <p>Coding Team</p>
            <p>Take photo by John Doe</p>
            <p
              style={{
                backgroundColor: "grey",
                padding: "10px",
                width: "80%",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ cursor: "pointer", color: "pink" }}
              />
              Contact
            </p>
          </Col>
        </Row>
      </div>
      {/* Work session */}
      <div className={ProjectCss.WorkMain}>
        <h3>Working experience</h3>
        <Row>
          <Col sm={6}>
            <p>
              I started to learn coding it was only one year already. I just
              learn like beigner to learn HTML, CSS and basic Javascript.
            </p>

            <h4>Frontend developer (Learning from SheCodes)</h4>
            <p>
              🗓️ Start learning from Feburary 2023 to <strong>present</strong>
            </p>
            <br />
            <br />
            <h4>React js (Learning from partner organization)</h4>
            <p>
              🗓️ Start learning from November 2022 to <strong>present</strong>
            </p>
          </Col>
          <Col sm={6}>
            <h4>Continues to learn extra course</h4>
            <p>📷 Web Design</p>
            <p>🙅‍♂️ Phtotography</p>
            <p>🕹️ Photoshop</p>
          </Col>
        </Row>
      </div>
      {/* Footer session */}

      <div className={ProjectCss.Footer}>
        <h1>Choose a work that you would to exporing</h1>
        <Row>
          <Col sm={4}>
            <div className={ProjectCss.BodyFooter}>
              <h3>Introduction to Basic coding</h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Angular</li>
                <li>WordPress</li>
              </ol>
            </div>
          </Col>
          <Col sm={4}>
            <div className={ProjectCss.BodyFooter}>
              <h3>Responsive coding</h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Angular</li>
                <li>WordPress</li>
              </ol>
            </div>
          </Col>
          <Col sm={4}>
            <div className={ProjectCss.BodyFooter}>
              <h3>React </h3>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Angular</li>
                <li>WordPress</li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <h2>
          This project was make
          <a href="https://github.com/Hsa-moo344/React-Final-Project">
            Open Source Code by{" "}
          </a>
          Hsa Moo Moo
        </h2>
      </div>
    </div>
  );
};

export default Home;
