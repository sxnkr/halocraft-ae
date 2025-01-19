import React from "react";
import HomeCTA from "@widgets/HomeCTA/view";
import HomeFooter from "@widgets/Footer/view";
import HomeServices from "@widgets/HomeServices/view";
import HomePortfolio from "@widgets/HomePortfolio/view";

export default function HomeLayout() {
  return (
    <>
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
        <HomeServices />
        <HomePortfolio />
        <HomeCTA />
      </main>
      <HomeFooter />
    </>
  );
}
