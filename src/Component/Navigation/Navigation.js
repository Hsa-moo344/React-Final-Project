import React from "react";
import ProjectCss from "../../css/common.module.css";

const Navigation = () => {
  return (
    <ul className={ProjectCss.NavigationContainer}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/About">About</a>
      </li>
      <li>
        <a href="/Team">Team</a>
      </li>
      <li>
        <a href="/Work">Work/Skill</a>
      </li>
      <li style={{ float: "right" }}>
        <a href="/Login">Login</a>
      </li>
    </ul>
  );
};
export default Navigation;
