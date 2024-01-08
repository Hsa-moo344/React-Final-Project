import React from "react";
import ProjectCss from "../../css/common.module.css";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-grid-system";

const Work = () => {
  return (
    <div>
      <Navigation />
      <div className={ProjectCss.WorkMain}>
        <h3>Coding skills</h3>
        <Row>
          <Col sm={6}>
            <p>
              Coding in a team: How you collaborate with other developers to
              build better software and get better results. You will learn why
              it is worthwhile to collaborate with other software developers and
              how you can improve your own skills in a targeted manner.
            </p>
          </Col>
          <Col sm={6}>
            <p>📷 Web Design</p>
            <p>🙅‍♂️ Phtotography</p>
            <p>🕹️ Photoshop</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Work;
