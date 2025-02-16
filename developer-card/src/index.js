import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    id: 1,
    skillName: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    id: 2,
    skillName: "JavaScript",
    level: "advanced",
    color: "#F7DF1E",
  },
  {
    id: 3,
    skillName: "React",
    level: "advanced",
    color: "#61DAFB",
  },
  {
    id: 4,
    skillName: "Git",
    level: "intermediate",
    color: "#F05033",
  },
  {
    id: 5,
    skillName: "Sass",
    level: "intermediate",
    color: "#CD6799",
  },
  {
    id: 6,
    skillName: "Bootstrap",
    level: "advanced",
    color: "#7952B3",
  },
  {
    id: 7,
    skillName: "Figma",
    level: "intermediate",
    color: "#A259FF",
  },
  {
    id: 8,
    skillName: "Responsive Design",
    level: "advanced",
    color: "#009688",
  },
  {
    id: 9,
    skillName: "WordPress",
    level: "beginner",
    color: "#21759B",
  },
  {
    id: 10,
    skillName: "TypeScript",
    level: "beginner",
    color: "#007ACC",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="assets/funghito.jpg" alt="pizaphoto" />;
}
function Intro() {
  return (
    <div>
      <h1>Grozav Victor</h1>
      <p>
        Blalalalalalalalalaaaaaaaaaaa alokod2dw;kdqk;dkq;kd;qkd;kq;ld
        dkq;kdqd'ql'dlq'ld'qdklwkdqd'qe wkdwkldkwedkwlkd;wekwkdwkdwkdkw
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skillName}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }} s>
      <span>{skill}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "advanced" && "💪"}</span>

      {/* {level === "intermediate" && (
        <span className="skill" style={{ backgroundColor: color }}>
          {skill}👍
        </span>
      )}
      {level === "advanced" && (
        <span className="skill" style={{ backgroundColor: color }}>
          {skill}💪
        </span>
      )}*/}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
