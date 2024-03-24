
function WorkPortfolio() {
    return (
      <div id="portfolio">
      <div className="container">
        <h1 style={{marginTop : "65px"}} className="text-center project-item">PORTFOLIO </h1>
        <p className="portfolio-sub-description">Below are some examples of my work. Stay tuned for more! </p>
        <hr className="divider-line"/>
          
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://mighty-cliffs-23244.herokuapp.com/">
                <img src={`${process.env.PUBLIC_URL}/assets/SSlanding.jpg`} alt="ScoreSocial application"/>
                <p>ScoreSocial</p>
              </a>
              <a href="https://github.com/dianavw8/ScoreSocial" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://dianavw8.github.io/Password-Generator/">
                <img src={`${process.env.PUBLIC_URL}/assets/PasswordGenImg.jpg`} alt="Image of Password Generator webpage"/>
                <p>Password Generator</p>
              </a>
              <a href="https://github.com/dianavw8/Password-Generator" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-4">
              <div className="project-item">
                <a href="https://dianavw8.github.io/Weather-Dashboard/">
                  <img src={`${process.env.PUBLIC_URL}/assets/Weather-Dashboard-Img.jpg`} alt="Weather Dashboard website"/>
                  <p>Weather Dashboard</p>
                </a>
                <a href="https://github.com/dianavw8/Weather-Dashboard" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
        </div>
           <div className="row">
          {/* <div className="row" style= {{marginBottom: "65px"}}> */}
            <div className="col-md-4">
              <div className="project-item">
                <a href="https://dianavw8.github.io/Timed-Coding-Quiz/">
                  <img src={`${process.env.PUBLIC_URL}/assets/codingquizgame.jpg`} alt="Timed Coding Quiz webpage"/>
                  <p>Timed Coding Quiz</p>
                </a>
                <a href="https://github.com/dianavw8/Timed-Coding-Quiz" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
            <div className="col-md-4">
            <div className="project-item">
              <a href="https://project-2-spotter.herokuapp.com/">
                <img src={`${process.env.PUBLIC_URL}/assets/Spotter_homepage.jpg`} alt="Spotter application"/>
                <p>Spotter</p>
              </a>
              <a href="https://github.com/mhengerer/Spotter" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://dianavw8.github.io/Work-Day-Scheduler/">
                <img src={`${process.env.PUBLIC_URL}/assets/Screenshot_20221112_094740.png`} alt="Work Day Scheduler webpage"/>
                <p>Work Day Scheduler</p>
              </a>
              <a href="https://github.com/dianavw8/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://dianavw8.github.io/Horiseon_Accessability-_Challenge/">
                <img src={`${process.env.PUBLIC_URL}/assets/HorisonPhoto.jpg`} alt="Image of Horiseon webpage"/>
                <p>Horiseon Accessibility Challenge</p>
              </a>
              <a href="https://dianavw8.github.io/Horiseon_Accessability-_Challenge/" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://beefbones.github.io/travel-planner/">
                <img src={`${process.env.PUBLIC_URL}/assets/Travel-Planner-Group-Project1.jpg`} alt="Image of Travel Planner webpage"/>
                <p>Travel Planner</p>
              </a>
              <a href="https://github.com/beefbones/travel-planner" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://radiant-tor-97650.herokuapp.com/">
                <img src={`${process.env.PUBLIC_URL}/assets/Tech_Blog_Comments_.jpg`} alt="Tech Blog application"/>
                <p>Tech Blog</p>
              </a>
              <a href="https://github.com/dianavw8/Tech_Blog" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div>
          {/* <div className="col-md-4">
            <div className="project-item">
              <a href="#">
                <img src={"https://t3.ftcdn.net/jpg/02/87/36/18/360_F_287361836_9hMr3LwNXBu1zdJnifR5X2A8N4CNCxBC.jpg"} alt="Coming Soon image"/>
                <p>Future Project</p>
              </a>
              <a href="https://github.com/dianavw8" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    );
}
  
  export default WorkPortfolio;