//import logo from './logo.svg';
//import './ProjectPortfolio.css';

import AboutMe from "./AboutMe";
import WorkPortfolio from "./WorkPortfolio";
import Resume from "./Resume";
import Contact from "./Contact";



function ProjectPortfolio(props) {
    if(props.componentToShow == undefined || props.componentToShow == null || props.componentToShow == '')
    {
        return (
            <div className="ProjectPortfolio">
                <p>Testing ProjectPortfolio</p>
            </div>
          );
    }
    else if(props.componentToShow == 'AboutMe')
    {
        return (
            <div className="ProjectPortfolio">
                <AboutMe/>
            </div>
          );
    }
    else if(props.componentToShow == 'WorkPortfolio')
    {
        return (
            <div className="ProjectPortfolio">
                <WorkPortfolio/>
            </div>
          );
    }
    else if(props.componentToShow == 'Contact')
    {
        return (
            <div className="ProjectPortfolio">
                <Contact/>
            </div>
          );
    }
    else if(props.componentToShow == 'Resume')
    {
        return (
            <div className="ProjectPortfolio">
                <Resume/>
            </div>
          );
    }
 
}

export default ProjectPortfolio;