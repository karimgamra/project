import React from "react";
import { socialLinks } from "../Data";
const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((item) => {
        const { id, herf, icon } = item;
        return (
          <li key={id}>
            <a
              href={herf}
              target="_blank"
              className={itemClass}
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
