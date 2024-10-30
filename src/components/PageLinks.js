import React from "react";
import { PageLink } from "../Data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {PageLink.map((links) => {
        const { id, link, text } = links;
        return (
          <li key={id}>
            <a href={link} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
