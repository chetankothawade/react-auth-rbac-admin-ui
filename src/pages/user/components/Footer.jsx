// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row align-items-center">

          <div className="col-sm-6">
            © Copyrights {currentYear} {import.meta.env.VITE_SITE_NAME || "SCIP"}. All rights reserved.
          </div>

          <div className="col-sm-6 text-end d-none d-sm-block">
            Design &amp; Developed by {import.meta.env.VITE_SITE_NAME || "SCIP"}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

