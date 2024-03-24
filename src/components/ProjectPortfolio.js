//import logo from './logo.svg';
//import './ProjectPortfolio.css';

import AboutMe from "./AboutMe";
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";



function ProjectPortfolio(props) {
    if(props.componentToShow == undefined || props.componentToShow == null || props.componentToShow == '')
    {
        return (
            <div className="project-portfolio ">
                <p>Testing ProjectPortfolio</p>
            </div>
          );
    }
    else if(props.componentToShow == 'AboutMe')
    {
        return (
            <div className="project-portfolio">
                <AboutMe/>
            </div>
          );
    }
    else if(props.componentToShow == 'Home')
    {
        return (
            <div className="project-portfolio">
                <Home/>
            </div>
          );
    }
    else if(props.componentToShow == 'Contact')
    {
        return (
            <div className="project-portfolio">
                <Contact/>
            </div>
          );
    }
    else if(props.componentToShow == 'Resume')
    {
        return (
            <div className="project-portfolio">
                <Resume/>
            </div>
          );
    }
 
}

export default ProjectPortfolio;