import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {

  return (
    <section className="hero">
      <div className="gif-wrapper">
        <Link to="/projects/octomania" className="project-number">1
          <span className="project-label">Octomania</span>
        </Link>
        <a href="/projects/octomaniaFontBook" className="project-number project-two">2 
          <span className="project-label label-right">Octomania Font Book</span>
        </a>
        <a href="/projects/Flixio" className="project-number project-three">3 
          <span className="project-label">Flixio</span>
        </a>
        <a href="/projects/TheOceanQuiz" className="project-number project-four">4 
          <span className="project-label label-right">The Ocean Quiz</span>
        </a>
        <a href="/projects/Romern" className="project-number project-five">5 
          <span className="project-label label-down">Romer`n</span>
        </a>
        <img 
          src="/animations/octopus.gif" 
          alt="Blekksprut animasjon"
          className="octopus" 
        />
      </div>
    </section>
  );
}

export default Hero;

