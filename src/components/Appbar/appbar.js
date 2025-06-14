import React from "react";
import "./appbar.css";
import { Link } from "react-scroll";

const Appbar = () => {
  return (
    <>
      <div>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div class="logo">
            <strong>
              <Link
                style={{ cursor: "pointer" }}
                to={"home"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
              >
                WebstarX
              </Link>
            </strong>
          </div>
          <ul class="links">
            <li>
              <Link
                style={{ cursor: "pointer" }}
                to={"home"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                to={"about"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                to={"services"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                to={"faqs"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
              >
                FAQS
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={10}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>

        {/* <header class="header">
        <h1 class="logo">
          <a href="#">WebstarX</a>
        </h1>
        <ul class="main-nav">
          <li>
            <a class="nav-link nav-link-ltr active" href="#">Work</a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#about">About</a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#services">Services</a>
          </li>
          <li>
            <a class="nav-link nav-link-ltr" href="#">Contact</a>
          </li>
        </ul>
      </header> */}
      </div>
    </>
  );
};

export default Appbar;
