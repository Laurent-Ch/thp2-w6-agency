import projectData from "../../../../data/projectData";
import { Link } from "react-router-dom";

const WorksNavbar = () => {

  return (
    projectData.map((project, index) => {
        return (
          <div key={`project-number-${index}`} class="project-link">
            <Link to={`${project.project.toLowerCase()}-study-case`}>{project.project}</Link>
            <br />
          </div>
        )
    })
  )
}

export default WorksNavbar;