import { useEffect, useState } from 'react';
import hostLogoURL from '../assets/img/host-icon.png';
import '../css/projects.css';

const API_URL = 'https://portfolio-website-7r8u.onrender.com/api/projects';
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('vishveshtrivedi_projects')) {
      setProjects(
        JSON.parse(sessionStorage.getItem('vishveshtrivedi_projects'))
      );
      setProjectsLoaded(true);
    } else {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          sessionStorage.setItem(
            'vishveshtrivedi_projects',
            JSON.stringify(data)
          );
        })
        .then(() => setProjectsLoaded(true))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="projects-container">
      {projectsLoaded &&
        projects.map((project, index) => {
          return (
            <div key={project._id} className="project-card">
              <div className="project-img">
                <img width="100%" src={project.imgURL} alt="" />
              </div>
              <div className="project-details">
                <h1 className="project-title">{project.name}</h1>
                <h4 className="project-desc">{project.description}</h4>
              </div>
              <div className="project-links">
                <div className="docs-links">
                  {project.docsLink.map((link, index) => {
                    return (
                      <a key={index} target="_blank" href={link.hrefLink}>
                        <img
                          height="35px"
                          width="35px"
                          src={link.logoURL}
                          alt="docs logo"
                        />
                      </a>
                    );
                  })}
                </div>
                <div className="host-link">
                  {project.hostLink ? (
                    <a target="_blank" href={project.hostLink}>
                      <img src={hostLogoURL} width="35px" alt="docs logo" />
                      <span>View Site</span>{' '}
                    </a>
                  ) : (
                    <div className="in-progress">In progress</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
