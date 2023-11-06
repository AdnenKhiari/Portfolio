import React from "react";
import Experience from "./(components)/Experience/Experience";
import TimeLine from "./(components)/Timeline/Timeline";
import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
export default function AllExperience() {

    return (
      <React.Fragment>
          <div className="education-exp-container">
            <h1 className="display-big">Education</h1>
            <TimeLine />
          </div>
          <div className="education-exp-container">
            <h1 className="display-big">Education</h1>
            <TimeLine />
          </div>
          <Info></Info>
      </React.Fragment>
    )
  }
  