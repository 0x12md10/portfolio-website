import "./SkillItem.css";


function SkillItem({skill}) {
  return (
    <div className="button-10 " role="button">
      <div className="btn-skill">
        {skill.icon && <div className="skill-icons-wrapper"><img className="skill-icon" src={`/techIcons/${skill.icon}`} alt="" /></div>}
        <div className="text">{skill.name}</div>
      </div>
    </div>
  )
}

export default SkillItem