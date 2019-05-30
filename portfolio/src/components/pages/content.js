import React, { Component } from 'react';

//components

//includes
class Content extends Component {
  render() {
    return (
  <div className="container-fluid p-0" id="page-top">
  <div className="bg-img">
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
            <p>
            <ul>
              <li>Recycling older PCs for future use</li>
              <li>Prepping new PCs and other technical hardware for client use</li>
              <li>Assisting engineers on technical tickets from customers</li>
              <li>Meeting with clients to assess needs related to their technical systems</li>
            </ul>
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2019 - May 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Service Desk Specialist</h3>
            <div className="subheading mb-3">The Home Depot</div>
            <p>
            <ul>
              <li>Assisting customers with any problems pertaining to orders, returns, or store issues</li>
              <li>Calling customers to provide information on orders</li>
              <li>Creating and maintaining online/special orders</li>
            </ul>
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2018 - January 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Busser</h3>
            <div className="subheading mb-3">Olive Garden</div>
            <p>
            <ul>
              <li>Cleaning tables after customers have left</li>
              <li>Maintaining a clean and fully stocked floor</li>
              <li>Serving customers if requested</li>
            </ul>    
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">September 2017 - January 2018</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Takeout Associate/Delivery Driver</h3>
            <div className="subheading mb-3">Marietta Pizza Company</div>
            <p>
            </p>
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
            <div>Software Engineering</div>
            <div>Minor in Applied Statistics and Data Analytics</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2013 - July 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Brookwood High School</h3>
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
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-python"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-bootstrap"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-linux"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-gulp"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-angular"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum</li>
        </ul>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
        <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end
          web development world.</p>
      </div>
    </section>

    <hr className="m-0"/>

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            SoloLearn HTML Fundementals Certificate</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            SoloLearn CSS Fundementals Certificate</li>
        </ul>
      </div>
    </section>
    </div>
  </div>
    );
  }
}

export default Content;
