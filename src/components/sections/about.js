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
              I currently hold the position of a Senior R&D Engineer at{' '}
              <a href="https://www.hpe.com/us/en/home.html">Hewlett Packard Enterprise</a>, where I
              play a pivotal role within the{' '}
              <a href="https://www.hpe.com/in/en/solutions/infosight.html">HPE Infosight</a> AIOps
              team.
            </p>
            <p>
              My primary responsibilities encompass both Data Science research and Machine Learning
              engineering, with a specialized focus on analyzing time-series data sourced from
              servers and peripherals like CPU, Power, Memory, and I/O. My research endeavors are
              multifaceted. I delve into:
              <ul className="skills-list">
                <li>
                  Forecasting of time series – For Reliable and Explainable Predictions (Univariate,
                  Multivariate, Ensembles)
                </li>
                <li>
                  Time-series Data and Model compression - For Cost-Effective Storage and increasing
                  data privacy
                </li>
                <li>Time-series Segmentation - For increasing Interpretability and Transparency</li>
              </ul>
            </p>
            <p>
              I'm privileged to collaborate with{' '}
              <a href="https://www.hpe.com/us/en/hewlett-packard-labs.html">
                Hewlett Packard Labs{' '}
              </a>{' '}
              particularly under the mentorship of{' '}
              <a href="https://www.linkedin.com/in/suparna-bhattacharya-5a7798b/?originalSubdomain=in">
                Dr Suparna Bhattacharya.
              </a>{' '}
              Our joint efforts are channeled towards the development of data-centric algorithms
              tailored for time-series datasets. Additionally, I'm in the midst of curating a
              comprehensive literature survey, which aims to bolster the trustworthiness of Machine
              Learning pipelines using data-centric methodologies.
            </p>

            <p>
              My collaborations extend to esteemed professionals like{' '}
              <a href="https://scholar.google.com/citations?user=P3OJaZQAAAAJ&hl=en">
                Dr Tarun Kumar{' '}
              </a>{' '}
              and{' '}
              <a href="https://patents.google.com/?inventor=Madhusoodhana+Chari+Sesha&num=100&oq=Madhusoodhana+Chari+Sesha+">
                Madhusoodhana Chari Sesha.
              </a>{' '}
              Together, we're pioneering work on local model-agnostic explanations of time series,
              custom KMeans for time-point clustering, and advanced pattern recognition systems in
              time series.
            </p>

            <p>
              {' '}
              I'm proud to have conceptualized eight <a href="/#projects">patent inventions</a>:
              <ul className="skills-list">
                <li>Unsupervised segmentation of time series using motifs and shapelets</li>
                <li>Compression of a univariate time-series dataset using motifs</li>
                <li>A data centric approach towards server time series model compression</li>
                <li>An improved forecasting algorithm for Power and CPU data of a server</li>
                <li>
                  Improved ensemble forecasting algorithm using time-series data sampled at multiple
                  intervals
                </li>
                <li>
                  Identifying hotspots and coldspots in forecasted power consumption data in an IT
                  data center for workload scheduling
                </li>
                <li>An analytical method to improve the life of an SSD drive in a server</li>
                <li>Server's maintenance time window prediction</li>
              </ul>
            </p>
            <p>
              Beyond my research and inventions, I'm deeply committed to nurturing budding talent. I
              actively <a href="/#mentorship">mentor</a> undergraduate students, guiding them
              through their academic research journeys. Under my tutelage, we've successfully
              completed two research papers, both of which are in the publication pipeline:
              <ul className="skills-list">
                <li>
                  <a href="https://arxiv.org/abs/2308.12918v1">
                    Evaluating the Vulnerabilities in ML systems in terms of adversarial attacks
                  </a>
                </li>
                <li>
                  <a href="https://ssrn.com/abstract=4551038">
                    Unsupervised learning approach for grouping trajectories
                  </a>
                </li>
              </ul>
            </p>

            <p>
              Lastly, I believe in giving back to the research community. I've had the honor of
              reviewing papers for esteemed conferences like{' '}
              <a href="https://hipc.org/">HiPC 2023</a> and{' '}
              <a href="https://aic2023.scrs.in/">AIC 2023 </a> , all while being mentored by{' '}
              <a href="https://www.linkedin.com/in/kalapriya-kannan-0862b55b/">
                Dr. Kalapriya Kanan.{' '}
              </a>
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
