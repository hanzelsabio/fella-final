import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";

function SocialLinks() {
  const Social_Links = [
    {
      href: "https://instagram.com/fellascreenprints.ph",
      icon: BsInstagram,
    },
    {
      href: "https://facebook.com/fellascreenprintsph",
      icon: FiFacebook,
    },
    {
      href: "https://tiktok.com/fellascreenprints.ph",
      icon: PiTiktokLogo,
    },
  ];

  return Social_Links.map(({ href, icon: Icon }) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-500 transition"
    >
      <Icon className="w-6 h-6" />
    </a>
  ));
}

export default SocialLinks;
