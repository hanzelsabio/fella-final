import React from "react";
import { Link } from "react-router-dom";

function NavLinks({ onClick, linkClass }) {
  const Nav_Links = [
    { label: "Services", path: "/#services" },
    { label: "About Us", path: "/#about-us" },
    { label: "Our Work", path: "/#our-works" },
    { label: "Reviews", path: "/#reviews" },
    { label: "Contact Us", path: "/contact" },
  ];

  return Nav_Links.map(({ label, path }) => (
    <Link
      key={path}
      to={path}
      onClick={onClick}
      className={
        linkClass ? linkClass(path) : "hover:text-green-500 transition"
      }
    >
      {label}
    </Link>
  ));
}

export default NavLinks;
