//import logo from './logo.svg';
//import './HeaderPortfolio.css';

import NavigationPortfolio from "./NavigationPortfolio";

function HeaderPortfolio(props) {
  return (
    <div className="HeaderPortfolio" style={{marginBottom : '50px'}}>
        <NavigationPortfolio showComponent={props.showComponent}/>
    </div>
  );
}

export default HeaderPortfolio;