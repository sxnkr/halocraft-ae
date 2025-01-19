import React from "react";
import Link from "@components/NextLink";

export default function Copyright() {
  return (
    <div className="foot">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <p className="fsz-16 cr-999">
            Copyright: © 2025 by &nbsp;
            <Link href="/" className="text-white">
              Halocraft
            </Link>
            &nbsp; All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
