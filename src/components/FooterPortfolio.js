//import logo from './logo.svg';
//import './HeaderPortfolio.css';

function FooterPortfolio() {
  return (
    <div className="FooterPortfolio">
      

    <div id="contact">
      <div className="footer">
        <div className="container">
          <h1 className="text-center" style={{marginTop: '65px'}}>Links</h1>
          <hr className="divider-line"/>
          <div className="row">
            <div className="home-buttons text-center" style={{marginBottom: '65px'}}>
              <a href="https://www.linkedin.com/in/diana-santacruz-264a708b/" className="portfolio-tooltip contact-button btn btn-default">
                <i className="fa fa-linkedin"></i>
                <span className="tooltiptext">Linkedin</span>
              </a>
              <a href="https://github.com/dianavw8" className="portfolio-tooltip contact-button btn btn-default">
                <i className="fa fa-github"></i>
                <span className="tooltiptext">Github</span>
              </a>
              <a href="mailto:dianavw8@gmail.com" className="portfolio-tooltip contact-button btn btn-default">
                <i className="fa fa-envelope-o"></i>
                <span className="tooltiptext">Gmail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>






    </div>
  );
}

export default FooterPortfolio;