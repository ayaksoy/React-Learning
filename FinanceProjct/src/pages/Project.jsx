import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../features/projectSlice";

export default function Project() {
  // Redux store'dan projects verisini alıyoruz
  const projects = useSelector((state) => state.project.projects);
  const projectStatus = useSelector((state) => state.project.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projectStatus === 'idle') {
      dispatch(fetchProjects());
    }
  }, [projectStatus, dispatch]);

  return (
    <div>
      <Hero title="Project" />
      <div className="gallery-sec pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="gallery-area">
              <div className="navbarsort">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbarfiltr"
                  aria-expanded="false"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="shorttitle">
                  <h2>Sort Gallery</h2>
                </div>
              </div>
              <div
                className="collapse navbar-collapse latest--project"
                id="navbarfiltr"
              >
                <ul className="simplefilter">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".Planing">Planing</li>
                  <li data-filter=".Analysis">Analysis</li>
                  <li data-filter=".Management">Management</li>
                  <li data-filter=".Investment">Investment</li>
                </ul>
              </div>
              <div className="gallery-container">
                {projects.map((item) => (
                  <div key={item.id} className={`col-xs-6 col-sm-4 col-md-3 filtr-item ${item.category}`}>
                    <div className="gallery-item">
                      <img src={item.image} alt={item.title} />
                      <div className="project-project-gallery-overlay">
                        <div className="project-gallery-overlay-text">
                          <div className="gallery-button">
                            <h2>
                              <a href="project-details.html">{item.title}</a>
                            </h2>
                            <a href={item.image} className="gallery-photo">
                              <i className="fa fa-camera"></i>
                            </a>
                            <a href="project-details.html">
                              <i className="fa fa-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
