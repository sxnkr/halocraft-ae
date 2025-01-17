import React from "react";
import Image from "@components/NextImage";

const projects = [
  {
    id: 1,
    imgUrl: "/img/projects/1.jpg",
    alt: "",
    title: "Promotional Gifts",
    text: "Branding",
    className: "col-lg-4",
    imgHeight: 480,
    imgWidth: 450,
    animationText: "project-card shadow-card wow fadeIn slow",
  },
  {
    id: 2,
    imgUrl: "/img/projects/2.jpg",
    alt: "",
    title: "EcoFriendly Gifts",
    text: "Gifting",
    className: "col-lg-3 offset-lg-3",
    imgHeight: 280,
    imgWidth: 450,
    animationText: "project-card mt-150 wow fadeIn slow",
  },
  {
    id: 3,
    imgUrl: "/img/projects/3.jpg",
    alt: "",
    title: "Uniforms",
    text: "Custom Print",
    className: "col-lg-4 offset-lg-1",
    imgHeight: 480,
    imgWidth: 450,
    animationText: "project-card shadow-card wow fadeIn slow",
  },
  {
    id: 4,
    imgUrl: "/img/projects/4.jpg",
    alt: "",
    title: "Customized Gift box Assembly",
    text: "Branding",
    className: "col-lg-4 offset-lg-3",
    imgHeight: 480,
    imgWidth: 450,
    animationText: "project-card mt-150 wow fadeIn slow",
  },
  {
    id: 5,
    imgUrl: "/img/projects/5.jpg",
    alt: "",
    title: "Signage",
    text: "Branding",
    className: "col-lg-8 offset-lg-2",
    imgHeight: 1100,
    imgWidth: 480,
    animationText: "project-card shadow-card mt-150 wow fadeIn slow",
  },
  {
    id: 6,
    imgUrl: "/img/projects/1.jpg",
    alt: "",
    title: "Corporate Gifts",
    text: "Branding",
    className: "col-lg-4",
    imgHeight: 480,
    imgWidth: 450,
    animationText: "project-card shadow-card wow fadeIn slow",
  },
  {
    id: 7,
    imgUrl: "/img/projects/2.jpg",
    alt: "",
    title: "Vehicle Branding",
    text: "Branding",
    className: "col-lg-3 offset-lg-3",
    imgHeight: 280,
    imgWidth: 450,
    animationText: "project-card mt-150 wow fadeIn slow",
  },
  {
    id: 8,
    imgUrl: "/img/projects/3.jpg",
    alt: "",
    title: "Digital & Offset Printing",
    text: "Branding",
    className: "col-lg-4",
    imgHeight: 480,
    imgWidth: 450,
    animationText: "project-card shadow-card wow fadeIn slow",
  },
  {
    id: 9,
    imgUrl: "/img/projects/4.jpg",
    alt: "",
    title: "Personalized Branding",
    text: "Branding",
    className: "col-lg-3 offset-lg-3",
    imgHeight: 480,
    imgWidth: 450,
    animationText: "project-card mt-150 wow fadeIn slow",
  },
];

export default function HomePortfolio() {
  return (
    <section className="tc-portfolio-st4">
      <div className="container">
        <div
          className="title text-center mb-50 wow fadeIn slow"
          data-wow-delay="0.2s"
        >
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h6 className="fsz-16 fw-200 mb-20">
                <Image
                  src="/img/portfolio/tit_ico_left.svg"
                  alt=""
                  className="icon"
                  width={50}
                  height={50}
                />
                <span className="txt mx-2">Best Of Our Special Portfolio</span>
                <Image
                  src="/img/portfolio/tit_ico_right.svg"
                  alt=""
                  className="icon"
                  width={50}
                  height={50}
                />
              </h6>
              <h2 className="fsz-50">Our Services</h2>
            </div>
          </div>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-work1">
            <div className="projects">
              <div className="row">
                {projects.map((item) => (
                  <div className={item?.className} key={item?.id}>
                    <div className={item?.animationText} data-wow-delay="0.2s">
                      <div className="img">
                        <Image
                          src={item?.imgUrl}
                          alt={item?.alt}
                          height={item?.imgHeight}
                          width={item?.imgWidth}
                        />
                      </div>
                    </div>
                    <div className="info-card">
                      <h6 className="fsz-24 mb-10">{item?.title}</h6>
                      <p className="fsz-16 cr-777">{item?.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
