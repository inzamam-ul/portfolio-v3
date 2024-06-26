import { srConfig } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    async function animate() {
      if (revealTitle.current && revealProjects.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealTitle.current, srConfig());
        sr().reveal(revealArchiveLink.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr().reveal(ref, srConfig(i * 100))
        );
      }
    }
    animate();
  }, []);

  const GRID_LIMIT = 6;
  const projects = [
    {
      external: "https://nextjs-gql-apollo-pokemon.vercel.app/",
      title: "Next.js GraphQL Pokemon App",
      tech: ["JavaScript", "Next.js", "Material UI", "GraphQL", "express.js"],
      githubFront: "https://github.com/inzamam-ul/nextjs-gql-apollo-pokemon",
      description:
        "It's a Pokemon app build with Next.js, graphql and Material UI. Implemented Incremental Static Regeneration and pagination. And data caching using graphql",
    },
    {
      external:
        "https://github.com/inzamam-ul/time-tracker-inmogr-react-native",
      title: "Time tracker React Native App",
      tech: ["JavaScript", "React Native", "Firebase", "Styled Component"],
      githubFront:
        "https://github.com/inzamam-ul/time-tracker-inmogr-react-native",
      description:
        "This project was build with React Native CLI. And used firebase as backend. It's a time tracker app which keep tracks of your time frame",
    },
    {
      external: "https://github.com/inzamam-ul/OpenAI-Chatbot-Server",
      title: "OpenAI Chatbot Server",
      tech: ["JavaScript", "Node.js", "OpenAI", "express.js"],
      githubBack: "https://github.com/inzamam-ul/OpenAI-Chatbot-Server",
      description: "It's a OpenAI Chatbot backend server",
    },
    {
      external: "https://react-redux-simple-todo.netlify.app/",
      title: "Simple Todo",
      tech: ["JavaScript", "React", "Redux", "React-redux", "Tailwind CSS"],
      githubFront: "https://github.com/inzamam-ul/redux-react-simple-todo",
      githubBack: "https://github.com/inzamam-ul/simple-todo-json-server",
      description:
        "It's a simple todo app where user can add,delete and update their todo list and also can filter their todo list. User can mark priority of their todo list",
    },
  ];
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = ({
    githubFront,
    githubBack,
    external,
    title,
    tech,
    description,
  }) => {
    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <CiFolderOn />
              {/* <FiFolder /> */}
              {/* <HiOutlineFolder /> */}
            </div>
            <div className="project-links">
              {githubFront && (
                <a
                  href={githubFront}
                  aria-label="GitHub Link"
                  title="Github Frontend Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {githubBack && (
                <a
                  href={githubBack}
                  aria-label="GitHub Link"
                  title="Github Backend Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  title="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description">
            <p>{description}</p>
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <section className="other-projects container">
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      {/* <Link
        className="inline-link archive-link"
        to="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </Link> */}

      <ul className="projects-grid">
        <TransitionGroup component={null}>
          {projectsToShow &&
            projectsToShow.map((item, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <li
                  className="other-project"
                  key={i}
                  ref={(el) => (revealProjects.current[i] = el)}
                  style={{
                    transitionDelay: `${
                      i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                    }ms`,
                  }}
                >
                  {projectInner(item)}
                </li>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </section>
  );
};

export default OtherProjects;
