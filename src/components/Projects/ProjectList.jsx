import React from "react";
import Project from "./Project.jsx";
import "./Project.css";

const projects = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        title: "Project 1",
        description: "Description 1"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        title: "Project 2",
        description: "Description 2"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        title: "Project 3",
        description: "Description 3"
    }
]

const ProjectList = () => {
    return (
        <div className="projectList">
            <h1 className="projectListTitle">Projects</h1>
            <div className="projectListContainer">
                { projects.map((project) => (
                    <Project key={project.id} {...project}></Project>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;