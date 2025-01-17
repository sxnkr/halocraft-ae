import React from "react";
import Link from "@components/NextLink";
import Image from "@components/NextImage";
import Copyright from "@widgets/Footer/components/Copyright";

export default function HomeFooter() {
  return (
    <footer className="tc-footer-st4">
      <div className="social-icons col-lg-4">
        <div className="icons">
          <Link href="#">
            <Image
              src="img/social/facebook.svg"
              alt={""}
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image src="img/social/x.svg" alt={""} width={20} height={20} />
          </Link>
          <Link href="#">
            <Image
              src="img/social/instagram.svg"
              alt={""}
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="img/social/linkedIn.svg"
              alt={""}
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      <div className="main-footer col-lg-8">
        <div className="links-wrapper">
          <div className="row">
            <div className="col-lg-5">
              <Link href="/" className="logo">
                <Image
                  src="/img/logo.png"
                  alt="Halo_Logo"
                  width={180}
                  height={60}
                  style={{ width: "140px", height: "auto" }}
                />
              </Link>
              <div className="links-group mt-30">
                <div className="links"></div>
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
      </div>
      <Copyright />
    </footer>
  );
}
