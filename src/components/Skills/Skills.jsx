import "./skills.css"

const Skills = () => {
  return (
    <>
      <div className="sectionSkills">
      <h2 className="tituloSkills">SKILLS</h2>
      
        <ul className="listadoSkills">
            <li><img className="imgSkills" src="../public/html.png"/> </li>
            <li><img className="imgSkills" src="../public/css.png"/> </li>
            <li><img className="imgSkills" src="../public/js.png"/> </li>
            <li><img className="imgSkills" src="../public/react.png"/> </li>
            <li><img className="imgSkills" src="../public/python.png"/> </li>
            <li><img className="imgSkills" src="../public/bootstrap.png"/> </li>
            <li><img className="imgSkills" src="../public/github.png"/> </li>
        </ul>
      </div>
    </>
  )
}

export default Skills
