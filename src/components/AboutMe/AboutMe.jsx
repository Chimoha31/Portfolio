import React from "react";
import styled from "styled-components";
import './AboutMe.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import timelineElements from "../../timelineElements";
import "react-vertical-timeline-component/style.min.css";

function AboutMe() {
  let workIconStyles = { background: "pink" };
  let schoolIconStyles = { background: "yellow" };

  
  return (
    <Div>
      <div className="title">
        <h1>Education</h1>
        <h1>Experience</h1>
      </div>
      <div className="timeline_container">
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <Description>{element.description}</Description>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background: #333333;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: black;
  line-height: 1.5;
`;
const Description = styled.p`
  padding: 1.5rem 0 2rem 0;
`;
export default AboutMe;
