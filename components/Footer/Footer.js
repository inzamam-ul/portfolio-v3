import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FiGitBranch,
  FiGithub,
  FiLinkedin,
  FiStar,
  FiTwitter,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socialMedia = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/inzamam-ul",
    icon: <FiLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/inzamam-ul",
    icon: <FiGithub />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/Inzamamul_Haque/",
    icon: <SiLeetcode />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/inzamam_su",
    icon: <FiTwitter />,
  },
];

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      color: var(--lightest-slate);
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
    color: var(--light-slate);
    text-decoration: none;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/inzamam-ul/portfolio-v3")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url, icon }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  {icon}
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <a href="https://github.com/inzamam-ul/portfolio-v3">
          <div> Built with love by Inzamamul Haque</div>

          {githubInfo.stars && githubInfo.forks ? (
            <div className="github-stats">
              <span>
                <FiStar />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <FiGitBranch />

                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          ) : (
            " "
          )}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
