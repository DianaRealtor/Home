function Resume() {
    return (
      <div className="container">
      <h1 style={{marginTop: '65px'}}>RESUME</h1>
          <hr className="divider-line"/>
      <div className="Resume card" style={{ maxWidth: '600px', display: 'inline-table',margin: '30px'}}>
        <div id="skills" style= {{fontSize: "150%"}}>
            <p>After completing my studies, I have acquired professional proficiency in a variety of technologies, including the following:</p>
        </div>
          <div className="row dev-skills-row">
            <div className="dev-skills">
              <h3 style={{fontSize: '145%', flex:'100%'}}>Developer Skills:</h3>
              <ul className="about-text" style={{fontSize: '135%'}}>
                <li>Javascript</li>
                <li>Git</li>
              </ul>
              <ul className="about-text" style={{fontSize: '135%'}}>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <ul className="about-text" style={{fontSize: '135%'}}>
                <li>React</li>
                <li>Node.js</li>
              </ul>
              <ul className="about-text" style={{fontSize: '135%'}}>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
              {/* <ul className="about-text" style={{fontSize: '135%'}}>
                <li>Test</li>
                <li>Test</li>
              </ul>
              <ul className="about-text" style={{fontSize: '135%'}}>
                <li>Test</li>
                <li>Test</li>
              </ul> */}
            </div>
          </div>
          
          <div id="resume" style= {{fontSize: "150%", margin:'20px 0'}}>
            <p>To access a copy of my resume, please use the link below.</p>
            <a href="https://drive.google.com/file/d/123jrkNszL8MKOiGAjWCIl4H8B9Cporya/view?usp=sharing" download>Download Resume</a>
          </div>
      </div>
      </div>
    );
  }
  
  export default Resume;