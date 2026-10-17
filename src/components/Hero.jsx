
import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="gif-wrapper">

        {/* Project 1 - Octomania */}
        <Link
          to="/projects/octomania"
          className="project-number"
        >
          1
          <span className="project-label">
            Octomania
          </span>
        </Link>

        {/* Project 2 - Octomania Font Book */}
        <Link
          to="/projects/octomaniaFontBook"
          className="project-number project-two"
        >
          2
          <span className="project-label label-right">
            Octomania Font Book
          </span>
        </Link>

        {/* Project 3 - Flixio */}
        <Link
          to="/projects/flixio"
          className="project-number project-three"
        >
          3
          <span className="project-label">
            Flixio
          </span>
        </Link>

        {/* Project 4 - The Ocean Quiz */}
        <Link
          to="/projects/theOceanQuiz"
          className="project-number project-four"
        >
          4
          <span className="project-label label-right">
            The Ocean Quiz
          </span>
        </Link>

        {/* Project 5 - Romern */}
        <Link
          to="/projects/romern"
          className="project-number project-five"
        >
          5
          <span className="project-label label-down">
            Romer`n
          </span>
        </Link>

        {/* Animated octopus */}
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


