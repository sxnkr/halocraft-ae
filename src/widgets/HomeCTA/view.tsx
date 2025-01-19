import React from "react";
import Link from "@components/NextLink";
import Image from "@components/NextImage";

export default function HomeCTA() {
  return (
    <section className="tc-subscribe-st4">
      <div className="container">
        <div className="subscribe-card wow fadeIn slow" data-wow-delay="0.2s">
          <div className="row">
            <div className="col-lg-7">
              <h3>
                <Link href="tel:+555442211100"> +555 4422 111 00 </Link>
              </h3>
              <h3>
                <Link href="mailto:info@halocraft.ae"> info@halocraft.ae </Link>
              </h3>
            </div>
            <div className="col-lg-5">
              <form className="form mt-5 mt-lg-0">
                <h3> Subscribe Now. </h3>
                <div className="form-group">
                  <label htmlFor="" className="fsz-18 fw-600 mb-10">
                    Your Mail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="info@halocraft.ae"
                  />
                  <button>
                    <Image
                      src="/img/cta/arrow.svg"
                      alt="button"
                      width={30}
                      height={10}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Image
            src="/img/cta/subs_shapes.png"
            alt="shapes"
            className="shapes"
            width={1240}
            height={440}
          />
        </div>
      </div>
    </section>
  );
}
