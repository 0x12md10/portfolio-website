import SkillItem from "../SkillItem.jsx/SkillItem"
import skills from "../../utils/skillsData"
import "./Skills.css";
import { useContext } from "react";
import ScrollContext from "../../utils/ScrollContext";

function Skills() {

  const {sectionRefs} = useContext(ScrollContext)

  return (
    <div  ref={sectionRefs.section2} className="skills-layout">
        <div className="skills-header">Skills<span className="skills-header--tooltip">It&apos;s just a glimpse</span></div>
        <div className="skill-items">
          <div className="row">
            <div className="box"><SkillItem skill ={skills[0]}/></div>
            <div className="box"><SkillItem skill ={skills[1]}/></div>
            <div className="box"><SkillItem skill ={skills[2]}/></div>
            <div className="box"><SkillItem skill ={skills[3]}/></div>

          </div>
          <div className="row">
            <div className="box"><SkillItem skill ={skills[4]}/></div>
            <div className="box"><SkillItem skill ={skills[7]}/></div>
            <div className="box"><SkillItem skill ={skills[5]}/></div>
            <div className="box"><SkillItem skill ={skills[6]}/></div>


          </div>
          <div className="row">

            <div className="box"><SkillItem skill ={skills[11]}/></div>
            <div className="box"><SkillItem skill ={skills[12]}/></div>
            <div className="box"><SkillItem skill ={skills[13]}/></div>
          </div>
          <div className="row">
            <div className="box"><SkillItem skill ={skills[8]}/></div>
            <div className="box"><SkillItem skill ={skills[9]}/></div>
            <div className="box"><SkillItem skill ={skills[10]}/></div>
          </div>
          <div className="row">

            <div className="box"><SkillItem skill ={skills[14]}/></div>
            <div className="box"><SkillItem skill ={skills[15]}/></div>
          </div>
          <div className="row">
           <div className="box"><SkillItem skill ={skills[16]}/></div>
          </div>
        </div>
    </div>
  )
}

export default Skills