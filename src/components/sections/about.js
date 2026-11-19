import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-sans);
      font-size: var(--fz-lg);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Today I'm a Research Engineer at{' '}
              <a href="https://www.cmu.edu/">Carnegie Mellon University</a>'s CLeaR Group (Causal ML
              &amp; LLMs), finishing a research master's in Electrical &amp; Computer Engineering,
              and co-founder of <a href="https://shopthru.ai">Shopthru.ai</a>, where we help brands
              understand and improve how they appear in AI shopping conversations.
            </p>
            <p>
              At CMU I designed a Causal Education Platform adopted by 500+ students and researchers
              and architected CMU's Causal Discovery Platform with a multi-agent assistance
              framework. I also mentor graduate students as a TA for the Master's Data Science
              Capstone.
            </p>
            <p>
              Previously I worked on agentic AI for silicon design at Apple, led ML teams at EXL,
              and spent six years at Hewlett Packard Enterprise R&amp;D, where my research produced{' '}
              <a href="/#projects">patent filings</a> in time-series forecasting, compression,
              segmentation, workload scheduling, and explainability.
            </p>

            {/* <p> Hello! I am an experienced researcher and a software engineer with experience in Python, 
              Data Science, Android Application Development, Augmented Reality, Virtual Reality &amp; Internet of things. 
            </p>
             */}
            {/* <p>
            I work as a senior R&D Engineer at {' '}<a href="https://www.hpe.com/us/en/home.html">Hewlett Packard Enterprise</a>. 
            My current role is of a Data Science researcher and an ML Engineer. 
            I work in the {' '}<a href="https://www.hpe.com/in/en/solutions/infosight.html">HPE Infosight AIOps</a> team, where I :
            <ul>
            <li>Create machine learning models for various server-related use cases:
            <ul className="skills-list"> 
              <li>Recommending customized Customer advisory alerts to HPE server customers</li>
              <li>Predicting maintenance time for Firmware updates on HPE Servers</li>
              <li>Workload scheduling using forecasted power supply data of a server</li>
            </ul>
            </li>
            <li>Setup end-to-end workflow of ML life cycle using frameworks like MLFlow and Kubeflow</li>
            <li>Create secure data flow pipelines to collect data from servers residing in customer data-centres</li>
            <li>Create and maintain systems to efficiently store and process big data</li>
            <li>Develop scripts and software to clean, transform and analyze server data</li>
            </ul>
            </p> */}

            {/* <p>
            I am currently working on exploring time-series data generated from a server(CPU, Power, Memory data) and 
            actively researching the following themes :
            <ul className="skills-list">
              <li>Forecasting of time series – For Reliable Predictions (Univariate, Multivariate, Ensembles)</li>
              <li>Time-series Data and Model compression - For Cost-Effective Storage</li>
              <li>Time-series Segmentation - For Interpretable Models</li>
            </ul>

I am contributing and working towards advanced research on these, with ambitious goals towards enhancing AIOPS for products and HPE solutions, patents and external journal publishing. 
            </p> */}

            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://www.hpe.com/in/en/solutions/infosight.html">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients.
            </p> */}

            {/* <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p> */}

            {/* <p>Here are a few technologies I’ve been working with recently:</p> */}
          </div>

          {/* <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul> */}
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
