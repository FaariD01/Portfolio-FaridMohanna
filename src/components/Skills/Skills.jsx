import "./skills.css"

const Skills = () => {
  return (
    <>
      <div id="skills" className="sectionSkills">
      <h2 className="tituloSkills">HABILIDADES</h2>
      
        <ul className="listadoSkills">
            <li>
              <div className="containerSkill">
                <img className="imgSkills" src="../public/html.png"/> 
                <h3 className="textSkills">HTML5</h3>
              </div>
            </li>
            <li>
              <div className="containerSkill">              
                <img className="imgSkills" src="../public/css.png"/> 
                <h3 className="textSkills">CSS</h3>
              </div>
            </li>
            <li>
              <div className="containerSkill">
                <img className="imgSkills" src="../public/js.png"/> 
                <h3 className="textSkills">JavaScript</h3>
              </div>
            </li>
            <li>
              <div div className="containerSkill">
                <img className="imgSkills" src="../public/react.png"/>
                <h3 className="textSkills">React</h3>
              </div>
            </li>
            <li>
              <div div className="containerSkill">
                <img className="imgSkills" src="../public/python.png"/> 
                <h3 className="textSkills">Python</h3>
              </div>
            </li>
            <li>
              <div div className="containerSkill">
                <img className="imgSkills" src="../public/bootstrap.png"/> 
                <h3 className="textSkills">Bootstrap</h3>
              </div>
            </li>
            <li>
              <div div className="containerSkill">
                <img className="imgSkills" src="../public/github.png"/> 
                <h3 className="textSkills">GitHub</h3>
              </div>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Skills
