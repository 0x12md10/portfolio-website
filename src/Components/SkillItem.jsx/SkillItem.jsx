import "./SkillItem.css";


function SkillItem({skill,src}) {
  return (
    <div className="button-10 " role="button">
      <div className="btn-skill">
      <div className="skill-icons-wrapper"><img className="skill-icon" src={`/techIcons/${src}`} alt="" /></div><div className="text">{skill}</div>
      </div>
    </div>
  )
}

export default SkillItem