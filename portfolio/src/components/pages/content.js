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
        <h1 className="mb-0">Frank</h1>
          <h1 className="text-primary">Brahmbhatt</h1>
        <div className="subheading mb-5">Atlanta Metro Area/Lawrenceville, GA 30044 ·
          <a href="mailto:fbrahmbhatt5595@gmail.com">fbrahmbhatt5595@gmail.com</a>
        </div>
        <p className="lead mb-5">
          Hello world! My name is Frank Brahmbhatt, I am a software engineering graduate from Kennesaw State University.
          I hold a Bachelors of Science in Software Engineering(BSSWE) with a minor in Applied Statistics and Data Analytics and graduated in the summer of 2019.
          I have developed skills in web development, software development, and data analytics that I try to improve on as much as possible.
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
              <h3 className="mb-0">Contract Web Designer</h3>
              <div className="subheading mb-3">B-Raja Networks</div>
              <ul>
                <li>Created testing environment to implement major changes to the website without interrupting the live site</li>
                <li>Implemented entire design overhaul to live website with a provided WordPress template</li>
                <li>Implemented WordPress plug-ins to facilitate content changes</li>
                <li>Wrote custom CSS, JavaScript, and PHP to personalize site to the owners request</li>
                <li>Provided a demonstration on how to alter content and design of the new site to the site owners before the end of the contract</li>
                <li><a href="http://www.b-raja.com" target="_blank" rel="noopener noreferrer">http://www.b-raja.com</a></li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 5th 2019 - August 30th 2019</span>
            </div>
          </div>

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
        <div className="subheading mb-3">&#40;Click or Hover on Icons&#41;</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5" data-tip data-for='html'></i>
            <ReactTooltip place='right' id='html' aria-haspopup='true'>
             <p className="rtt">HTML5 </p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt" data-tip data-for='css'></i>
            <ReactTooltip place='right' id='css' aria-haspopup='true'>
             <p className="rtt">CSS3</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square" data-tip data-for='js'></i>
            <ReactTooltip place='right' id='js' aria-haspopup='true'>
             <p className="rtt">JavaScript</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-python"data-tip data-for='py'></i>
            <ReactTooltip place='right' id='py' aria-haspopup='true'>
             <p className="rtt">Python</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-bootstrap"data-tip data-for='bts'></i>
            <ReactTooltip place='right' id='bts' aria-haspopup='true'>
             <p className="rtt">Bootstrap</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"data-tip data-for='react'></i>
            <ReactTooltip place='right' id='react' aria-haspopup='true'>
             <p className="rtt">ReactJS</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"data-tip data-for='node'></i>
            <ReactTooltip place='right' id='node' aria-haspopup='true'>
             <p className="rtt">Node.JS</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"data-tip data-for='sass'></i>
            <ReactTooltip place='right' id='sass' aria-haspopup='true'>
             <p className="rtt">Sass</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-linux"data-tip data-for='linux'></i>
            <ReactTooltip place='right' id='linux' aria-haspopup='true'>
             <p className="rtt">Linux</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-windows"data-tip data-for='windows'></i>
            <ReactTooltip place='right' id='windows' aria-haspopup='true'>
             <p className="rtt">Windows[Office &amp; Command Prompt]</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-gulp"data-tip data-for='gulp'></i>
            <ReactTooltip place='right' id='gulp' aria-haspopup='true'>
             <p className="rtt">GulpJS</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-angular"data-tip data-for='ng'></i>
            <ReactTooltip place='right' id='ng' aria-haspopup='true'>
             <p className="rtt">AngularJS</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"data-tip data-for='java'></i>
            <ReactTooltip place='right' id='java' aria-haspopup='true'>
             <p className="rtt">Java</p>
            </ReactTooltip>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-code" data-tip data-for='c'></i>
            <ReactTooltip place='right' id='c' aria-haspopup='true'>
             <p className="rtt">C++</p>
            </ReactTooltip>
          </li>
        </ul>

        <div className="subheading mb-3">Additional Skills</div>
        <ul>
          <li>Django Web Framework</li>
          <li>Customer Service</li>
          <li>Computer &amp; Phone Repair</li>
          <li>Agile Development Practices</li>
          <li>Requirements Elicitation</li>
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Documentation</li>
          <li>Consulting</li>
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

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>

          <div className="resume-content">
            <div className="resume-date text-md-right">
              <a href="https://www.youtube.com/watch?v=S51rIk4pS64" target="_blank" rel="noopener noreferrer">Watch the Video</a>
            </div>
            <h3 className="mb-0">Project: BAMovers</h3>
            <div className="subheading mb-3">For: KSU User Centered Design Course</div>
              <ul>
                <li>Description: Kennesaw State University User Centered Design class project to create a UI prototype for a moving company mobile application.</li>
                <li>Technology used: Unity and C#</li>
                <li>Skills gained: Teamwork, Prototyping, UI Design, Working with Unity, Presenting, and Wire-framing </li>
                <li>Group Size: 5</li>
                <li>Role: UI/UX Engineer</li>
              </ul>
          </div>

          <div className="resume-content">
            <div className="resume-date text-md-right">
              <a href="http://accuaccounting.gearhostpreview.com/" target="_blank" rel="noopener noreferrer">Check it Out</a>
            </div>
            <h3 className="mb-0">Project: AccuAccounting</h3>
            <div className="subheading mb-3">For: KSU Application Domain Course</div>
              <ul>
                <li>Sign-In: Username:manager@gmail.com Password: letmein</li>
                <li>Description: Accounting web application created as a final project for an Application Domain class at Kennesaw State University. </li>
                <li>Technology used: Xampp, GitHub, PHP, JavaScript, HTML, CSS, Bootstrap 4, SQL, PHPMyAdmin, and MySQL Workbench(used for hosting) </li>
                <li>Skills gained: Web Application Development, Hosting, Git and Github, Team Collaboration, Requirement Engineering, and Documenting  </li>
                <li>Group Size: 4</li>
                <li>Role: Full-stack Developer</li>
              </ul>
          </div>

          <div className="resume-content">
            <h3 className="mb-0">Project: Cybriant Public Security Analyzer </h3>
            <div className="subheading mb-3">For: KSU Capstone Project</div>
              <ul>
                <li>Description: Senior capstone project for a local IT business named Cybriant. The project was a Django web application for internal employees to assess cyber security hygiene on clients websites using a variety of modules to return a security score. </li>
                <li>Technology used: Django Web Framework, Python, HTML, CSS, JavaScript, Bootstrap 4, Neo4j Graph Database, and Cypher</li>
                <li>Skills gained: Teamwork, Web Application Development, Graph Database Management, Web Design, and Presenting</li>
                <li>Group Size: 6</li>
                <li>Role: Lead Full-stack Software Developer</li>
              </ul>
          </div>

          <div className="resume-content">
            <div className="resume-date text-md-right">
              <a href="https://frankdatankb.github.io/CountriesOfTheWorld/" target="_blank" rel="noopener noreferrer">Check it Out</a>
            </div>
            <h3 className="mb-0">Project: Countries of the World</h3>
            <div className="subheading mb-3">For: Self Practice in React and REST API use</div>
              <ul>
                <li>Description: A simple React front which shows all the countries in the world with their respective populations and recives data via the <a href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer">REST Countries</a> publicly avalible API.</li>
                <li>Technology used: React and Tachyons</li>
                <li>Skills gained: React devlopment, API calling, and Web Design using Tachyons</li>
              </ul>
          </div>

        </div>
      </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="certs">
    <div className="w-100">
      <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            </div>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a className="certs" href="https://www.sololearn.com/Certificate/1014-1104458/pdf/" target="_blank" rel="noopener noreferrer">SoloLearn HTML Fundementals Certificate</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a className="certs" href="https://www.sololearn.com/Certificate/1023-1104458/pdf/" target="_blank" rel="noopener noreferrer">SoloLearn CSS Fundementals Certificate</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a className="certs" href="https://www.sololearn.com/Certificate/1060-1104458/pdf/" target="_blank" rel="noopener noreferrer">SoloLearn SQL Fundementals Certificate</a>
            </li>
          </ul>
        </div>
      </section>
  </div>
    );
  }
}

export default Content;
