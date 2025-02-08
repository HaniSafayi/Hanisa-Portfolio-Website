import React from "react";
import "./Skills.scss";

const skills = [
  { name: "HTML", icon: "/html5.png" },
  { name: "CSS", icon: "/css3.png" },
  { name: "React", icon: "/react.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "Javascript", icon: "/javascript.png" },
  { name: "Python", icon: "/python.png" },
  { name: "Mongodb", icon: "/mongodb.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Flutter", icon: "/flutter.png" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="skill-icon"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
