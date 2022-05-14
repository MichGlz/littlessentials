import { useState } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        <h3> 3 simple steps that will give you time and space to focus on what really matters</h3>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
