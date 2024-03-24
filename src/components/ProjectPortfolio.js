//import logo from './logo.svg';
//import './ProjectPortfolio.css';

import AboutMe from "./AboutMe";
import Home from "./Home";
import Search from "./Search";
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
    else if(props.componentToShow == 'Search')
    {
        return (
            <div className="project-portfolio">
                <Search/>
            </div>
          );
    }
 
}

export default ProjectPortfolio;