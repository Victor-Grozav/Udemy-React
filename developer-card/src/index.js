import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function SkillData({ skillStule, skillName, skillEmojy }) {
  return (
    <div className="skill">
      <p style={{ background: skillStule }}>
        {skillName}
        {skillEmojy}
      </p>
    </div>
  );
}

function DeveloperCard(props) {
  console.log(props);
  return (
    <>
      <div className="bigDiv">
        <img className="avatar" src={props.Photo} alt="card" />
        <div className="seconddiv">
          <h1>{props.Name}</h1>
          <p className="description">{props.Description}</p>
        </div>
        <div>
          <div className="firstskill">
            <SkillData
              skillName="HTML + CSS"
              skillEmojy="💪"
              skillStule="blue"
            />
            <SkillData
              skillName="HTML + CSS"
              skillEmojy="💪"
              skillStule="blue"
            />
          </div>
          <div className="secondskill">
            <SkillData skillName="React" skillEmojy="💪" skillStule="red" />
            <SkillData skillName="React" skillEmojy="💪" skillStule="red" />
          </div>
          <div className="thirdskill">
            <SkillData
              skillName="Web-design"
              skillEmojy="💪"
              skillStule="yellow"
            />
            <SkillData
              skillName="Web-design"
              skillEmojy="💪"
              skillStule="yellow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DeveloperCard
      Photo="/assets/funghito.jpg"
      Name="Grozav Victor"
      Description="Junior Developer bhdohdojoijoidjjjjjjjjjjjjjjjjjjjjjjjjjjjj<br>
      jodij2jdljqkjwd djldjoidoiwjdoijwdiwdjoiwjdoiwjdoiwijdowjdowj<br>
      dowjdowjodjwodjwojdowjdoiwjdojwodjowjdwjd "
    />
  </React.StrictMode>
);
