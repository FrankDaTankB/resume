import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

//components

//includes
class Content extends Component {
  render() {
    return (
  <div className="container-fluid p-0" id="page-top">
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Frank
          <span className="text-primary">Brahmbhatt</span>
        </h1>
        <div className="subheading mb-5">Atlanta Metro Area/Lawrenceville, GA 30044 ·
          <a href="mailto:fbrahmbhatt5595@gmail.com">fbrahmbhatt5595@gmail.com</a>
        </div>
        <p className="lead mb-5">
          Hello world! My name is Frank Brahmbhatt, I am a current software enginerring student at Kennesaw State University.
          I am pursuing a Bachelors of Science in Software Engineering(BSSWE) degree with a minor in Applied Statistics and Data Analytics and am projected to graduate in the summer of 2019.
          I have a passion for web development, software development, and data analytics that I hope to leverage into your company.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/frank-brahmbhatt/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/FrankDaTankB" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">IT Service Technician Intern</h3>
            <div className="subheading mb-3">Headwaters Group</div>
            <ul>
              <li>Recycling older PCs for future use</li>
              <li>Prepping new PCs and other technical hardware for client use</li>
              <li>Assisting engineers on technical tickets from customers</li>
              <li>Meeting with clients to assess needs related to their technical systems</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2019 - May 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Service Desk Specialist</h3>
            <div className="subheading mb-3">The Home Depot</div>
            <ul>
              <li>Assisting customers with any problems pertaining to orders, returns, or store issues</li>
              <li>Calling customers to provide information on orders</li>
              <li>Creating and maintaining online/special orders</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2018 - January 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Busser</h3>
            <div className="subheading mb-3">Olive Garden</div>
            <ul>
              <li>Cleaning tables after customers have left</li>
              <li>Maintaining a clean and fully stocked floor</li>
              <li>Serving customers if requested</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">September 2017 - January 2018</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Takeout Associate/Delivery Driver</h3>
            <div className="subheading mb-3">Marietta Pizza Company</div>
            <ul>
              <li>Answering, processing, checking, and completing takeout orders</li>
              <li>Processing, checking, and completing delivery orders</li>
              <li>Cleaning before opening or closing the store</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2016 - August 2017</span>
          </div>
        </div>

      </div>

    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Kennesaw State University</h3>
            <div className="subheading mb-3">Bachelor of Science in Software Engineering</div>
            <div>Major in Software Engineering</div>
            <div>Minor in Applied Statistics and Data Analytics</div>
            <div className="subheading mb-3">Relevent Courses</div>
            <ul>
              <li>Programming Principles I&II</li>
              <li>Introduction to Software Engineering</li>
              <li>Introduction to Database Systems</li>
              <li>Discrete Structures in Computing</li>
              <li>Computer Organization and Architecture</li>
              <li>Software System Requirements</li>
              <li>Software Architecture and Design</li>
              <li>Software Project Management</li>
              <li>Software Application Domain</li>
              <li>Software Testing Q&amp;A</li>
              <li>Data Structures</li>
              <li>Operating Systems</li>
              <li>Fundamentals of Block Chain Smart Contracts</li>
              <li>Computer Applied Statistics</li>
              <li>Topics in Regression</li>
              <li>Biostatistics</li>
              <li>Statistical Methods II</li>
              <li>Statistics in Python</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2013 - July 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Brookwood High School</h3>
            <div className="subheading mb-3">College Prepatory Education</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2009 - May 2013</span>
          </div>
        </div>

      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5" data-tip data-for='html'></i>
            <ReactTooltip place='right' id='html' aria-haspopup='true' role='example'>
             <p className="rtt">HTML5 </p>
             <p className="rtt">Skill Level: Advanced</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt" data-tip data-for='css'></i>
            <ReactTooltip place='right' id='css' aria-haspopup='true' role='example'>
             <p className="rtt">CSS3</p>
             <p className="rtt">Skill Level: Advanced</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square" data-tip data-for='js'></i>
            <ReactTooltip place='right' id='js' aria-haspopup='true' role='example'>
             <p className="rtt">JavaScript</p>
             <p className="rtt">Skill Level: Intermediate</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-python"data-tip data-for='py'></i>
            <ReactTooltip place='right' id='py' aria-haspopup='true' role='example'>
             <p className="rtt">Python</p>
             <p className="rtt">Skill Level: Intermediate</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-bootstrap"data-tip data-for='bts'></i>
            <ReactTooltip place='right' id='bts' aria-haspopup='true' role='example'>
             <p className="rtt">Bootstrap</p>
             <p className="rtt">Skill Level: Advanced</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"data-tip data-for='react'></i>
            <ReactTooltip place='right' id='react' aria-haspopup='true' role='example'>
             <p className="rtt">ReactJS</p>
             <p className="rtt">Skill Level: Intermediate</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"data-tip data-for='node'></i>
            <ReactTooltip place='right' id='node' aria-haspopup='true' role='example'>
             <p className="rtt">Node.JS</p>
             <p className="rtt">Skill Level: Beginner</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"data-tip data-for='sass'></i>
            <ReactTooltip place='right' id='sass' aria-haspopup='true' role='example'>
             <p className="rtt">Sass</p>
             <p className="rtt">Skill Level: Intermediate</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-linux"data-tip data-for='linux'></i>
            <ReactTooltip place='right' id='linux' aria-haspopup='true' role='example'>
             <p className="rtt">Linux</p>
             <p className="rtt">Skill Level: Advanced</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-windows"data-tip data-for='windows'></i>
            <ReactTooltip place='right' id='windows' aria-haspopup='true' role='example'>
             <p className="rtt">Windows[Office &amp; Command Prompt]</p>
             <p className="rtt">Skill Level: Advanced</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-gulp"data-tip data-for='gulp'></i>
            <ReactTooltip place='right' id='gulp' aria-haspopup='true' role='example'>
             <p className="rtt">GulpJS</p>
             <p className="rtt">Skill Level: Beginner</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-angular"data-tip data-for='ng'></i>
            <ReactTooltip place='right' id='ng' aria-haspopup='true' role='example'>
             <p className="rtt">AngularJS</p>
             <p className="rtt">Skill Level: Beginner</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"data-tip data-for='java'></i>
            <ReactTooltip place='right' id='java' aria-haspopup='true' role='example'>
             <p className="rtt">Java</p>
             <p className="rtt">Skill Level: Intermediate</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-code" data-tip data-for='c'></i>
            <ReactTooltip place='right' id='c' aria-haspopup='true' role='example'>
             <p className="rtt">C++</p>
             <p className="rtt">Skill Level: Intermediate</p>
            </ReactTooltip>
          </li>
        </ul>

        <div className="subheading mb-3">Additional Skills</div>
        <ul>
          <li>
            Django Web Framework</li>
          <li>
            Customer Service</li>
          <li>
            Computer &amp; Phone Repair</li>
          <li>
            Agile Development Practices</li>
        </ul>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <p>When I&apos;m not improving my coding skills, I like to stay active by playing basketball, exercising, or simply being outdoors. I love hiking and kayaking when the weather permits, however, if it’s a nice day outside I will probably be down for whatever.</p>
        <p className="mb-0">My indoor hobbies aside from staring out the window are playing the guitar or drums, attempting to learn the keyboard, messing around on FL studio, watching SportsCenter, and catching up on innovations in technology.</p>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            <a className="certs" href="https://www.sololearn.com/Certificate/1014-1104458/pdf/" target="_blank" rel="noopener noreferrer">SoloLearn HTML Fundementals Certificate</a></li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            <a className="certs" href="https://www.sololearn.com/Certificate/1023-1104458/pdf/" target="_blank" rel="noopener noreferrer">SoloLearn CSS Fundementals Certificate</a></li>
        </ul>
      </div>
    </section>
  </div>
    );
  }
}

export default Content;
