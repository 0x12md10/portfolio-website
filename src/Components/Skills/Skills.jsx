import SkillItem from "../SkillItem.jsx/SkillItem"
import skills from "../../utils/skillsData"
import "./Skills.css";

function Skills() {

    console.log(skills)

  return (
    <div className="skills-layout">
        <div className="skills-header">Skills</div>
        <div className="skill-items">
        {
            skills.map((skill,i) => {
                return <SkillItem src={skill.icon} key={i} skill={skill.name} />
            })
        }
        </div>
    </div>
  )
}

export default Skills