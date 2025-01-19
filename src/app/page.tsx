import React from "react";
import HomeLayout from "../Layouts/Home/HomeLayout";

export default function page() {
  return (
    <div id="scrollsmoother-container">
      <nav className="navbar navbar-expand-lg navbar-light tc-navbar-st4">
        <div className="container-fluid">
          <a href="#" className="logo th-120">
            <img
              src="assets/img/logo.png"
              alt=""
              style={{ width: "150px" }}
              height="auto;"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto d-block d-lg-none">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Homes
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home1_creativeAgency/index.html"
                    >
                      Creative Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home2_digitalMarketing/index.html"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home3_branding/index.html"
                    >
                      Branding
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home4_creativePortfolio/index.html"
                    >
                      Creative Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home5_designStudio/index.html"
                    >
                      Design Studio
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home6_modernAgency/index.html"
                    >
                      Modern Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home7_startupAgency/index.html"
                    >
                      Startup Agency
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../home8_personalPortfolio/index.html"
                    >
                      Personal Portfolio
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/about.html"
                    >
                      About Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/blog.html"
                    >
                      blog Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/career_single.html"
                    >
                      career single Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/careers.html"
                    >
                      careers Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/contact.html"
                    >
                      contact Page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="../inner_pages/faq.html">
                      faq Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/portfolio.html"
                    >
                      portfolio Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/post.html"
                    >
                      post Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/pricing.html"
                    >
                      pricing Page
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../inner_pages/project.html"
                    >
                      project Page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="../inner_pages/404.html">
                      404 Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../home4_creativePortfolio/index.html"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../inner_pages/services.html">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../inner_pages/project.html">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../inner_pages/about.html">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../inner_pages/contact.html">
                  CONTACT US
                </a>
              </li>
            </ul>
            <div className="nav-side ms-lg-auto">
              <a href="#" className="fsz-16 fw-bold me-5">
                {" "}
                info@halocraft.ae
              </a>
              <a className="d-none d-lg-inline-block side_menu_btn" href="#">
                {" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <HomeLayout />
    </div>
  );
}
