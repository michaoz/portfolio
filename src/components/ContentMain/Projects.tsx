import { ReactNode } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Projects.css';
import { PropTypeContentMainProjects } from '../../type/PropTypeContentMainProjects';

const Projects = (props: PropTypeContentMainProjects) => {
    const { visiblePrjBorders } = props;

    const prjBorders = (() => {
        return (
            <div className="border">
                <div className="horizontal top" />
                <div className="vertical right" />
                <div className="horizontal bottom" />
                <div className="vertical left" />
            </div>
        );
    });
    
    return (
        <div>
            <h1>Projects</h1>
            <div className="projects-list">
                <div id="project-1">
                    <h5>prj 1</h5>
                    <div className="project-info">
                        <img src={require("../../images/projects/prj.png")} alt="Photo of prpject-1"/>
                        <div className="project-text">
                            <h4>Trip Planning App</h4>
                            <p>
                                This app helps you create routes and list up your luggage for your trips.
                            </p>
                            <div className="project-tech-stack">
                                <p>Tech Stack</p>
                                <ul>
                                    <li>Java</li>
                                    <li>JQuery, JavaScript</li>
                                    <li>HTML, CSS</li>
                                    <li>PostGreSQL</li>
                                    <li>Maven</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* { prjBorders } */}
                    <div className="border">
                        <div className={visiblePrjBorders ? "active horizontal top" : "horizontal top"} />
                        <div className={visiblePrjBorders ? "active vertical right" : "vertical right"} />
                        <div className={visiblePrjBorders ? "active horizontal bottom" : "horizontal bottom"} />
                        <div className={visiblePrjBorders ? "active vertical left" : "vertical left"} />
                    </div>
                </div>
                <div id="project-2">
                    <h5>prj 2</h5>
                    <div className="project-info">
                        <img src={require("../../images/projects/prj.png")} alt="Photo of prpject-2"/>
                        <div className="project-text">
                            <h4>Bakery Listing App</h4>
                            <p>A small app to create your favourite bakeries list. You could search bakeries and get information of them.</p>
                            <div className="project-tech-stack">
                                <p>Tech Stack</p>
                                <ul>
                                    <li>Python</li>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>HTML, CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <div className={visiblePrjBorders ? "active horizontal top" : "horizontal top"} />
                        <div className={visiblePrjBorders ? "active vertical right" : "vertical right"} />
                        <div className={visiblePrjBorders ? "active horizontal bottom" : "horizontal bottom"} />
                        <div className={visiblePrjBorders ? "active vertical left" : "vertical left"} />
                    </div>
                </div>
            </div>
            <a href="https://github.com/michaoz" className="view-all-link" target="_blank" rel="noopener noreferrer">
                <div className="view-all">
                    View All                
                </div>
            </a>
        </div>
    );
}

export default Projects;