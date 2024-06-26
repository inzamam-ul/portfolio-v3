import React, { useState, useEffect, useRef, createRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { srConfig } from "@/utils";

const Work = () => {
  const data = [];

  const jobsData = [
    {
      date: "2023-12-21",
      title: "Front End Developer",
      company: "BakeBoost",
      location: "Remote",
      range: "May 2023 - Present",
      url: "https://bakeboost.com/",
      des: [
        "Implemented a real-time messaging system for communicating with customers using the Meta Cloud API",
        "Created a system to create a personal e-commerce page with a custom domain for all registered user to sell their product to their end customer",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2023-12-21",
      title: "Assistant Software Engineer",
      company: "SoftBD LTD",
      location: "Dhaka, Bangladesh",
      range: "Feb 2024 - May 2024",
      url: "https://softbdltd.com/",
      des: [
        "Worked as an Assistant Software Engineer on a Govt. project called LAMS (Land Administration Management System).",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2022-12-21",
      title: "Front End Developer",
      company: "AI Baby",
      location: "Freelancing Project",
      range: "May 2024",
      url: "https://aibabypredictor.com/",
      des: [
        "Developed and shipped web applications for AI Baby using Next.js, Flask, MongoDB",
        "Built api endpoints in python(Flask) to handle request from user and payments",
        "Added on page SEO and Deployed the web app on vercel",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2022-12-21",
      title: "Front End Developer",
      company: "Lively",
      location: "Freelancing Project",
      range: "(19th November - 23rd November) 2022",
      url: "https://livelystudio.io/",
      des: [
        "Developed and shipped web applications for Lively Studio using Next.js, Prisma, Sql light",
        "Built two api end point using Next.js api route to add reviews and posts",
        "Deployed the web app on aws using EC2 linux server using NGINX",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2017-12-21",
      title: "Full Stack Developer",
      company: "Prime Oman",
      location: "Freelance Project",
      range: "July - November 2022",
      url: "#",
      des: [
        "Developed and maintained code for the client website primarily using HTML, CSS, React, Next.js, Material UI, Node.js, express.js, MongoDB",
        "Helped to move their manual workflow online by implementing dynamic pdf certificate generation using PDF-Lib, sending certificates to their clients via email",
        "Implemented device authentication to prevent unknown user to access their secret dashboard",
      ],
      nodeRef: createRef(null),
    },
    {
      date: "2017-12-21",
      title: "Front End Engineer(Part Time)",
      company: "eRMG",
      location: "Singapore(Remote)",
      range: "February - June 2021",
      url: "https://www.ermg.co/",
      des: [
        "Worked with a dedicated team to build a SASS webapp for RMG(Ready made garments), an ambitious startup originating from Singapore",
        "Helped to build the whole front end part from the scratch using React.js and Material UI",
        "Architected and implemented the front-end part of the dashboard",
      ],
      nodeRef: createRef(null),
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const revealHeader = useRef(null);

  useEffect(() => {
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealHeader.current, srConfig());
        sr().reveal(revealContainer.current, srConfig());
      }
    }
    animate();
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  return (
    <Container id="work" className="padding-container">
      <Row className="padding-container align-items-center justify-content-center">
        <h2 ref={revealHeader} className="numbered-heading">
          Where I’ve Worked
        </h2>
        <Col ref={revealContainer} md={10}>
          <section style={{ maxWidth: 700 }} id="jobs">
            <div style={{ display: "flex" }} className="inner">
              <div
                className="tablist"
                role="tablist"
                aria-label="Job tabs"
                //   onKeyDown={(e) => onKeyDown(e)}
              >
                {jobsData &&
                  jobsData.map(({ company }, i) => {
                    return (
                      <button
                        className="tab-button"
                        key={i}
                        isactive={(activeTabId === i).toString()}
                        onClick={() => setActiveTabId(i)}
                        ref={(el) => (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        tabIndex={activeTabId === i ? "0" : "-1"}
                        aria-selected={activeTabId === i ? true : false}
                        aria-controls={`panel-${i}`}
                      >
                        <span>{company}</span>
                      </button>
                    );
                  })}
                <div
                  className="highlight-tab"
                  style={{
                    transform: `translateY(
                  calc(${activeTabId} * var(--tab-height))
                  )`,
                  }}
                  activetabid={activeTabId}
                />
                <div
                  className="highlight-mobile"
                  style={{
                    transform: `translateX(
                  calc(${activeTabId} * var(--tab-width))
                  )`,
                  }}
                  activetabid={activeTabId}
                />
              </div>

              <div className="panels">
                {jobsData &&
                  jobsData.map(
                    ({ title, url, company, range, des, nodeRef }, i) => {
                      return (
                        <CSSTransition
                          key={i}
                          in={activeTabId === i}
                          timeout={250}
                          classNames="fade"
                          nodeRef={nodeRef}
                        >
                          <div
                            className="panel"
                            id={i}
                            role="tabpanel"
                            tabIndex={activeTabId === i ? "0" : "-1"}
                            aria-labelledby={`tab-${i}`}
                            aria-hidden={activeTabId !== i}
                            hidden={activeTabId !== i}
                            ref={nodeRef}
                          >
                            <h3>
                              <span>{title}</span>
                              <span className="company">
                                &nbsp;@&nbsp;
                                <a href={url} className="inline-link">
                                  {company}
                                </a>
                              </span>
                            </h3>
                            <p className="range">{range}</p>
                            <div className="description">
                              <ul>
                                {des.map((item, i) => {
                                  return <li key={i}>{item}</li>;
                                })}
                              </ul>
                            </div>
                          </div>
                        </CSSTransition>
                      );
                    }
                  )}
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
