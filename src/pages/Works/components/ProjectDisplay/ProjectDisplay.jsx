import { useParams } from 'react-router-dom';
import projectData from '../../../../data/projectData';

const ProjectDisplay = () => {
  const { company } = useParams();
  const curatedCompany = company.slice(0, -11);
  const foundClient = projectData.find((client) => client.project.toLowerCase() === curatedCompany);
  return (
    <div className="project-display"> 
      <div className="project-elt project-name">{foundClient && foundClient.project}</div>
      <div className="project-elt project-pitch">{foundClient && foundClient.title}</div>
      <div className="project-elt project-description">{foundClient && foundClient.description}</div>
    </div>
  )
}

export default ProjectDisplay;