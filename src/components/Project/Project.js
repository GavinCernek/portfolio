
import React from "react";

import "./Project.css";

const Project = props => {

    return (
        <div className="project">
            <h1>{props.projectName}</h1>

            <div className="project-image">
                <img src={props.projectImage} alt="Project"/>
                <a href={props.projectURL}>View Project in GitHub</a>
            </div>

            <div className="project-info">
                <div className="project-description">
                    <h3>DESCRIPTION</h3>
                    <p>{props.projectDescription}</p>
                </div>

                <div className="project-difficulties">
                    <h3>DIFFICULTIES FACED</h3>
                    <p>{props.projectDifficulties}</p>
                </div>

                <div className="project-solutions">
                    <h3>SOLUTIONS TO THE DIFFICULTIES</h3>
                    <p>{props.projectSolutions}</p>
                </div>

                <div className="project-technologies">
                    <h3>TECHNOLOGIES USED</h3>
                    <ul id="technologies-list">
                        {props.projectTechnologies.map((technology, i) => (
                            <li key={i}>{technology}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;