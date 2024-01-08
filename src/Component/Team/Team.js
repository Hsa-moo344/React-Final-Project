import React from "react";
import ProjectCss from "../../css/common.module.css";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Team from "../../Images/team.jpg";

const Teams = () => {
  return (
    <div>
      <Navigation />
      <div className={ProjectCss.CodingTeam}>
        <h2>The Team</h2>
        <p>This is our team</p>
        <Row>
          <Col sml={3}>
            <img src={Team} style={{ width: "220px", height: "180px" }} />
            <p>Coding Team</p>
            <p>Take photo by John Doe</p>
            <p
              style={{
                backgroundColor: "grey",
                padding: "10px",
                width: "100%",
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
            <img src={Team} style={{ width: "220px", height: "180px" }} />
            <p>Coding Team</p>
            <p>Take photo by John Doe</p>
            <p
              style={{
                backgroundColor: "grey",
                padding: "10px",
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
    </div>
  );
};

export default Teams;
