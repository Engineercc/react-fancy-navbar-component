import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleSpanRef = useRef(null);

  useEffect(() => {
    if (linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (linksHeight > 800) {
        setShowLinks(!showLinks);
      }
      console.log(linksContainerRef.current.getBoundingClientRect());
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0";
      }
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logos">
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, src } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={src} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className={`nav-toggle ${showLinks && "toggled"}`}
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            ref={toggleSpanRef}
          >
            <span className={`${showLinks && "span-1"}`}></span>
            <span className={`${showLinks && "span-2"}`}></span>
            <span className={`${showLinks && "span-3"}`}></span>
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
