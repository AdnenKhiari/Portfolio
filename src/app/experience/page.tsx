import React from "react";
import TimeLine from "./(components)/Timeline/Timeline";
import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
import { getFromFirestore } from "../utils";

export default async function AllExperience() {
  const experiences = await getFromFirestore("experiences")
  const education = await getFromFirestore("education")
  
    return (
      <React.Fragment>
          <div className="education-exp-container">
            <h1 className="display-big">Experiences</h1>
            { experiences && <TimeLine experiences={experiences} />}
          </div>
          <div className="education-exp-container">
            <h1 className="display-big">Education</h1>
            { education && <TimeLine experiences={education} />}
          </div>
          <Info></Info>
      </React.Fragment>
    )
  }
  