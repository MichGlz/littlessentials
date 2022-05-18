import { useRef, useEffect, useState } from "react";
import styles from "../NavBar/navBar.module.scss";
import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import Dropdown from "../Dropdown/Dropdown";
import Dropdown2 from "../Dropdown/Dropdown2";

export default function NavBar(props) {
  const ref = useRef();
  const [isNavVisible, setIsNavVisible] = useState();
  let positionY;

  useEffect(() => {
    // console.log("useefct");
    positionY = window.innerHeight - ref.current.getBoundingClientRect().height;
    console.log("ref", ref.current.getBoundingClientRect().height);
    const appearOptions = {
      threshold: 0,
      rootMargin: `0px 0px -${positionY}px 0px`,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // const position=window.innerHeight-
      if (entry.isIntersecting && entry.boundingClientRect.top <= entry.boundingClientRect.height) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      // console.log("entry", entry);
    }, appearOptions);
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    // console.log(isNavVisible);
  }, [isNavVisible]);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <nav className={`${styles.NavBar} ${styles.visible}`} ref={ref}>
      <Link to="/">
        <LElement width="35" color="white"></LElement>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li> */}
        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/" className="nav-links nopointer" onClick={closeMobileMenu}>
            how it works
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
          <Link to="/" className="nav-links nopointer" onClick={closeMobileMenu}>
            about
          </Link>
          {dropdown2 && <Dropdown2 />}
        </li>
        <li className="nav-item">
          <Link to="/partners" className="nav-links" onClick={closeMobileMenu}>
            partners
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            connect
          </Link>
        </li>
      </ul>

      <ul className={styles.subNav}>
        <li className="nav-item">
          <Link to="/get-started" className="nav-links" onClick={closeMobileMenu}>
            Get started
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/log-in " className="nav-links" onClick={closeMobileMenu}>
            Log in
          </Link>
        </li>
      </ul>
      {/*  <ul className={styles.mainNav}>
        {/* <li className={styles.li}>
          <a>
            <LElement width="50" color="white"></LElement>
          </a>
        </li>
        <li className={styles.li}>
          <a>how it works</a>
        </li>

        <li className={styles.li}>
          <Link to="About" className={styles.li}>
            About
          </Link>
        </li>
        <li className={styles.li}>
          <a>partners</a>
        </li>
        <li className={styles.li}>
          <a>contact</a>
        </li> 
      </ul>
      <ul className={styles.subNav}>
        <li className={styles.li}>
          <a>get started</a>
        </li>
        <li className={styles.li}>
          <button>login</button>
        </li>
      </ul> */}
    </nav>
  );
}
