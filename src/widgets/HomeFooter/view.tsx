import React from "react";
import Copyright from "./components/Copyright";

export default function HomeFooter() {
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

      <header className="tc-header-st4">
        <div className="links d-none d-lg-inline-flex">
          <ul>
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
                    {" "}
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
                  <a className="dropdown-item" href="../inner_pages/about.html">
                    About Page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="../inner_pages/blog.html">
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
                  <a className="dropdown-item" href="../inner_pages/post.html">
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

            <li>
              <a href="../inner_pages/services.html">HOME</a>
            </li>
            <li>
              <a href="../inner_pages/services.html">SERVICES</a>
            </li>
            <li>
              <a href="../inner_pages/project.html">PROJECTS</a>
            </li>
            <li>
              <a href="../inner_pages/about.html">ABOUT US</a>
            </li>
            <li>
              <a href="../inner_pages/contact.html">CONTACT</a>
            </li>
          </ul>
          <div className="swiper-pagination"></div>
        </div>
        <div className="header-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="header-card">
                <img src="assets/img/header1.jpg" alt="" className="bg" />
                <img src="assets/img/head_shap.png" alt="" className="shap" />
                <div className="content">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="info">
                        <h1> Halocraft </h1>
                        <a
                          href="#"
                          className="butn bg-dark1 fsz-16 text-white py-3 mt-30"
                        >
                          {" "}
                          <span>
                            {" "}
                            Get a quote{" "}
                            <img
                              className="ms-2 icon-6 w-auto"
                              src="assets/img/arrow_wh.svg"
                              alt=""
                            />{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <a
                        href="#"
                        className="rotate-box"
                        data-speed="1"
                        data-lag="0.4"
                      >
                        <div className="rotate-circle rotate-text">
                          <svg className="textcircle" viewBox="0 0 500 500">
                            <defs>
                              <path
                                id="textcircle"
                                d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                              ></path>
                            </defs>
                            <text>
                              <textPath
                                xlinkHref="#textcircle"
                                textLength="900"
                              >
                                {" "}
                                Advertise with Impact,Gifts with heart.
                              </textPath>
                            </text>
                          </svg>
                        </div>
                        <img
                          src="assets/img/logo.png"
                          alt=""
                          style={{ width: "90px", height: "auto" }}
                          className="icon"
                        />
                      </a>
                    </div>
                    <div className="col-lg-7 offset-lg-5">
                      <div className="services-links">
                        <a href="#">Corporate Gifts </a>
                        <a href="#">Vehicle Branding </a>
                        <a href="#">Offset&Digital Printing </a>
                        <a href="#">EcoFriendly Gifts </a>
                        <img
                          src="assets/img/head_circles.png"
                          alt=""
                          className="bg-circls"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="header-card">
                <img src="assets/img/header2.jpg" alt="" className="bg" />
                <img src="assets/img/head_shap.png" alt="" className="shap" />
                <div className="content">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="info">
                        <h1> Halocraft</h1>
                        <a
                          href="#"
                          className="butn bg-dark1 fsz-16 text-white py-3 mt-30"
                        >
                          {" "}
                          <span>
                            {" "}
                            Get a quote{" "}
                            <img
                              className="ms-2 icon-6 w-auto"
                              src="assets/img/arrow_wh.svg"
                              alt=""
                            />{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <a
                        href="#"
                        className="rotate-box"
                        data-speed="1"
                        data-lag="0.4"
                      >
                        <div className="rotate-circle rotate-text">
                          <svg className="textcircle" viewBox="0 0 500 500">
                            <defs>
                              <path
                                id="textcircle"
                                d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                              ></path>
                            </defs>
                            <text>
                              <textPath
                                xlinkHref="#textcircle"
                                textLength="900"
                              >
                                {" "}
                                Advertise with Impact,Gifts with heart{" "}
                              </textPath>
                            </text>
                          </svg>
                        </div>
                        <img
                          src="assets/img/logo.png"
                          alt=""
                          style={{ width: "90px", height: "auto" }}
                          className="icon"
                        />
                      </a>
                    </div>
                    <div className="col-lg-7 offset-lg-5">
                      <div className="services-links">
                        <a href="#">Personalized Branding </a>
                        <a href="#">Promotional Gifts </a>
                        <a href="#">Signage </a>
                        <a href="#">Custom Printed Uniforms </a>
                        <img
                          src="assets/img/head_circles.png"
                          alt=""
                          className="bg-circls"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="tc-services-st4">
          <div className="services">
            <div className="container p-0">
              <div className="ser-row">
                <a href="#" className="ser-link">
                  {" "}
                  Personalized Branding{" "}
                </a>
                <a href="#" className="ser-icon">
                  {" "}
                  <img src="assets/img/icons/ser1.svg" alt="" />{" "}
                </a>
                <a href="#" className="ser-link">
                  {" "}
                  Customized Gift Box{" "}
                </a>
                <a href="#" className="ser-icon bg-dark1">
                  {" "}
                  <img src="assets/img/icons/ser2.svg" alt="" />{" "}
                </a>
                <a href="#" className="ser-link">
                  {" "}
                  Ecofriendly Gifting{" "}
                </a>
                <a href="#" className="ser-icon">
                  {" "}
                  <img src="assets/img/icons/ser3.svg" alt="" />{" "}
                </a>
                <a href="#" className="ser-link">
                  {" "}
                  Vehicle Branding{" "}
                </a>
              </div>
              <div className="ser-row">
                <a href="#" className="ser-icon">
                  {" "}
                  <img src="assets/img/icons/ser4.svg" alt="" />{" "}
                </a>
                <a href="#" className="ser-link">
                  {" "}
                  Corporate Gifts{" "}
                </a>
                <a href="#" className="ser-icon">
                  {" "}
                  <img src="assets/img/icons/ser5.svg" alt="" />{" "}
                </a>
                <a href="#" className="ser-link">
                  {" "}
                  Signage
                </a>
                <a href="#" className="ser-icon">
                  {" "}
                  <img src="assets/img/icons/ser6.svg" alt="" />{" "}
                </a>
                <a href="#" className="ser-link">
                  {" "}
                  Digital&Offset Printing
                </a>
                <a href="#" className="ser-icon">
                  {" "}
                  <img src="assets/img/icons/ser7.svg" alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="tc-portfolio-st4">
          <div className="container">
            <div
              className="title text-center mb-50 wow fadeIn slow"
              data-wow-delay="0.2s"
            >
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <h6 className="fsz-16 fw-200 mb-20">
                    {" "}
                    <img
                      src="assets/img/icons/tit_ico.svg"
                      alt=""
                      className="icon"
                    />{" "}
                    <span className="txt mx-2">
                      {" "}
                      Best Of Our Special Portfolio{" "}
                    </span>{" "}
                    <img
                      src="assets/img/icons/tit_ico2.svg"
                      alt=""
                      className="icon"
                    />{" "}
                  </h6>
                  <h2 className="fsz-50">Our Services</h2>
                </div>
              </div>
            </div>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-work1">
                <div className="projects">
                  <div className="row">
                    <div className="col-lg-4">
                      <a
                        href="../home5_designStudio/corpporate.html"
                        className="project-card shadow-card wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/1.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10"> Promotional Gifts </h6>
                          <p className="fsz-16 cr-777"> Branding </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3 offset-lg-3">
                      <a
                        href="../home5_designStudio/eco.html"
                        className="project-card mt-150 wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/2.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10">EcoFriendly Gifts </h6>
                          <p className="fsz-16 cr-777">Gifting </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                      <a
                        href="../home5_designStudio/uniforms.html"
                        className="project-card shadow-card wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/3.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10"> Uniforms </h6>
                          <p className="fsz-16 cr-777"> Custom Print </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 offset-lg-3">
                      <a
                        href="../home5_designStudio/customgift.html"
                        className="project-card mt-150 wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/4.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10">
                            {" "}
                            Customized Gift box Assembly{" "}
                          </h6>
                          <p className="fsz-16 cr-777"> Branding </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                      <a
                        href="../home5_designStudio/signage.html"
                        className="project-card shadow-card mt-150 wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/5.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10">Signage </h6>
                          <p className="fsz-16 cr-777"> Branding </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a
                        href="../home5_designStudio/corpporate.html"
                        className="project-card shadow-card wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/1.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10"> Corporate Gifts </h6>
                          <p className="fsz-16 cr-777"> Branding </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3 offset-lg-3">
                      <a
                        href="../home5_designStudio/vehicle.html"
                        className="project-card mt-150 wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/2.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10">Vehicle Branding</h6>
                          <p className="fsz-16 cr-777"> Branding</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a
                        href="../home5_designStudio/digital.html"
                        className="project-card shadow-card wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/1.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10">
                            {" "}
                            Digital & Offset Printing
                          </h6>
                          <p className="fsz-16 cr-777"> Branding </p>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3 offset-lg-3">
                      <a
                        href="../home5_designStudio/personalized.html"
                        className="project-card mt-150 wow fadeIn slow"
                        data-wow-delay="0.2s"
                      >
                        <div className="img">
                          <img src="assets/img/projects/2.jpg" alt="" />
                        </div>
                        <div className="info-card">
                          <h6 className="fsz-24 mb-10">
                            Personalized Branding
                          </h6>
                          <p className="fsz-16 cr-777">Branding </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-work2">
                <div className="projects">
                  <div className="projects">
                    <div className="row">
                      <div className="col-lg-4">
                        <a
                          href="../home5_designStudio/vehicle.html"
                          className="project-card shadow-card wow fadeIn slow"
                          data-wow-delay="0.2s"
                        >
                          <div className="img">
                            <img src="assets/img/projects/2.jpg" alt="" />
                          </div>
                          <div className="info-card">
                            <h6 className="fsz-24 mb-10"> Vehicle Branding</h6>
                            <p className="fsz-16 cr-777"> </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 offset-lg-3">
                        <a
                          href="../home5_designStudio/corpporate.html"
                          className="project-card mt-150 wow fadeIn slow"
                          data-wow-delay="0.2s"
                        >
                          <div className="img">
                            <img src="assets/img/projects/1.jpg" alt="" />
                          </div>
                          <div className="info-card">
                            <h6 className="fsz-24 mb-10">
                              {" "}
                              Corporate and Promotional gifts{" "}
                            </h6>
                            <p className="fsz-16 cr-777"> Branding </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 offset-lg-1">
                        <a
                          href="../home5_designStudio/digital.html"
                          className="project-card shadow-card wow fadeIn slow"
                          data-wow-delay="0.2s"
                        >
                          <div className="img">
                            <img src="assets/img/projects/3.jpg" alt="" />
                          </div>
                          <div className="info-card">
                            <h6 className="fsz-24 mb-10">
                              {" "}
                              Offset & digital print
                            </h6>
                            <p className="fsz-16 cr-777"> Custom Print </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 offset-lg-3">
                        <a
                          href="../home5_designStudio/personalized.html"
                          className="project-card mt-150 wow fadeIn slow"
                          data-wow-delay="0.2s"
                        >
                          <div className="img">
                            <img src="assets/img/projects/4.jpg" alt="" />
                          </div>
                          <div className="info-card">
                            <h6 className="fsz-24 mb-10">
                              Personalized Branding{" "}
                            </h6>
                            <p className="fsz-16 cr-777"> </p>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-8 offset-lg-2">
                        <a
                          href="../home5_designStudio/signage.html"
                          className="project-card shadow-card mt-150 wow fadeIn slow"
                          data-wow-delay="0.2s"
                        >
                          <div className="img">
                            <img src="assets/img/projects/5.jpg" alt="" />
                          </div>
                          <div className="info-card">
                            <h6 className="fsz-24 mb-10"> Signage</h6>
                            <p className="fsz-16 cr-777"> </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tc-subscribe-st4">
          <div className="container">
            <div
              className="subscribe-card wow fadeIn slow"
              data-wow-delay="0.2s"
            >
              <div className="row">
                <div className="col-lg-7">
                  <h3>
                    {" "}
                    <a href="#"> +555 4422 111 00 </a>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <a href="#"> info@halocraft.ae </a>{" "}
                  </h3>
                </div>
                <div className="col-lg-5">
                  <form className="form mt-5 mt-lg-0">
                    <h3> Subscribe Now. </h3>
                    <div className="form-group">
                      <label htmlFor="" className="fsz-18 fw-600 mb-10">
                        {" "}
                        Your Mail{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="info@halocraft.ae"
                      />
                      <button>
                        {" "}
                        <img src="assets/img/arrow.svg" alt="" />{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <img src="assets/img/subs_shapes.png" alt="" className="shapes" />
            </div>
          </div>
        </section>
      </main>

      <footer className="tc-footer-st4">
        <div className="social-icons col-lg-4">
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-x-twitter"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin-in"></i>{" "}
            </a>
          </div>
        </div>
        <div className="main-footer col-lg-8">
          <div className="links-wrapper">
            <div className="row">
              <div className="col-lg-5">
                <a href="#" className="logo">
                  {" "}
                  <img
                    src="assets/img/logo.png"
                    alt=""
                    style={{ width: "140px", height: "auto" }}
                  />{" "}
                </a>
                <div className="links-group mt-30">
                  <div className="links">
                    <a href="#" className="me-3">
                      FAQ
                    </a>
                    <a href="#" className="me-3">
                      {" "}
                      Careers{" "}
                    </a>
                    <a href="#" className="me-3">
                      {" "}
                      Contact Us{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="links-group mt-5 mt-lg-0">
                  <h6 className="fsz-18 mb-4"> More Service </h6>
                  <ul className="links">
                    <li>
                      <a href="./index.html"> HOME </a>
                    </li>
                    <li>
                      <a href="./inner_pages/services.html"> SERVICES </a>
                    </li>
                    <li>
                      <a href="./inner_pages/project.html"> PROJECTS </a>
                    </li>
                    <li>
                      <a href="./inner_pages/about.html"> ABOUT US </a>
                    </li>
                    <li>
                      <a href="./inner_pages/contact.html"> CONTACT US </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="links-group mt-5 mt-lg-0">
                  <h6 className="fsz-18 mb-4"> Address </h6>
                  <ul className="links">
                    <li>
                      <a href="#"> DUBAI </a>
                    </li>
                    <li>
                      <a href="#" className="opacity-100">
                        UNITED ARAB EMIRATES
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/img/foot_shapes.png"
            alt=""
            style={{ width: "150px", height: "auto" }}
            className="foot-shapes"
          />
        </div>
        <Copyright />
      </footer>
    </div>
  );
}
