import { useParams } from 'react-router-dom';
import projectData from '../../../../data/projectData';

const ProjectDisplay = () => {
  const { company } = useParams();
  const curatedCompany = company.slice(0, -11);
  const foundClient = projectData.find((client) => client.project.toLowerCase() === curatedCompany);
  return (
    <> 
      <div>{foundClient && foundClient.project}</div>
      <div>{foundClient && foundClient.title}</div>
      <div>{foundClient && foundClient.description}</div>
    </>
  )
}

export default ProjectDisplay;