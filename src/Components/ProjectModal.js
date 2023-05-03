import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "../Sass/Projects/ProjectsModal.css";
function ProjectModal(props) {
  const [project, setProject] = useState(props.project);

  useEffect(() => {}, []);
  return (
    <div>
      {project === "" ? (
        <h1>Loading...</h1>
      ) : (
        <div className="modalContainer">
          <Close className="closeIcon" onClick={() => props.closeModal()} />
          <div className="modalGrid">
            <div className="modalHeader">
              <div className="modalImage">
                <img src={project.imgHref} alt={project.stringTitle} />
              </div>
              <span className="modalTitle">{project.title}</span>
              <div className="modalLinks">
                <a href={project.gitHub} rel="noreferrer" target="blank">
                  GitHub
                </a>
                {project.liveSite !== "" && (
                  <a href={project.liveSite} rel="noreferrer" target="blank">
                    Live Site
                  </a>
                )}
              </div>
            </div>
            <div className="modalTech textBox">
              <b>Technologies Used:</b>
              <br /> {project.technologies}
            </div>

            <div className="modalDescription textBox">
              <b>Project Description:</b> <br />
              {project.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
