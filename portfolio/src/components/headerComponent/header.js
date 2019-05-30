import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


//components

//includes
class Header extends Component {
  scrollToTop = () => {
  scroll.scrollToTop();
};

  render() {
    return (
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" to="page-top" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
          <span className="d-block d-lg-none">Frank Brahmbhatt</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
              className="nav-link js-scroll-trigger"
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >About
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link js-scroll-trigger"
              to="experience"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link js-scroll-trigger"
              to="education"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link js-scroll-trigger"
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link js-scroll-trigger"
              to="interests"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Interests
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link js-scroll-trigger"
              to="awards"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Certifications
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header;
