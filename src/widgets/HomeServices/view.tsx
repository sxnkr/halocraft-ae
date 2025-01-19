import React from "react";
import Link from "@components/NextLink";
import Image from "@components/NextImage";

export default function HomeServices() {
  return (
    <section className="tc-services-st4">
      <div className="services">
        <div className="container p-0">
          <div className="ser-row">
            <Link href="#" className="ser-link">
              Personalized Branding
            </Link>
            <Link href="#" className="ser-icon">
              <Image
                src="/img/services/ser1.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" className="ser-link">
              Customized Gift Box
            </Link>
            <Link href="#" className="ser-icon bg-dark1">
              <Image
                src="/img/services/ser2.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" className="ser-link">
              Ecofriendly Gifting
            </Link>
            <Link href="#" className="ser-icon">
              <Image
                src="/img/services/ser3.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" className="ser-link">
              Vehicle Branding
            </Link>
          </div>
          <div className="ser-row">
            <Link href="#" className="ser-icon">
              <Image
                src="/img/services/ser4.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" className="ser-link">
              Corporate Gifts
            </Link>
            <Link href="#" className="ser-icon">
              <Image
                src="/img/services/ser5.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" className="ser-link">
              Signage
            </Link>
            <Link href="#" className="ser-icon">
              <Image
                src="/img/services/ser6.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" className="ser-link">
              Digital&Offset Printing
            </Link>
            <Link href="#" className="ser-icon">
              <Image
                src="/img/services/ser7.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
