import React from "react";
import { Link } from "react-router-dom";

function Logo({ className = "" }) {
  return (
    <Link to="/">
      <img
        src="/fella-screen-prints-logo.png"
        alt="Brand Logo"
        className={`w-40 ${className}`}
      />
    </Link>
  );
}

export default Logo;
