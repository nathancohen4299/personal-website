import React from "react";
import "./Page.css";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <div className="Page">
        <SectionTitle title={"Projects"} icon_id={"fas fa-project-diagram"}/>
        <h2>UDP Video Stream</h2>
        <p>Video streaming service that uses a server client model to stream video over UDP, with RDT elements when sending over frames with higher priority.</p>
        <h2>Boarding Simulator</h2>
        <p>Multithreaded program to simulate the airbus boarding experience, testing different patterns of order to decrease wait time.</p>
    </div>
  );
}

export default Projects;
