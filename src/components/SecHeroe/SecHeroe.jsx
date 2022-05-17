import styles from "../SecHeroe/secHeroe.module.scss";
import LElement from "../LElement/LElement";
import BtnCO2 from "../BtnCO2/BtnCO2";
import { Parallax } from "react-scroll-parallax";
// import { Animator, batch, Move, MoveOut, Sticky, Zoom } from "react-scroll-motion";

export default function SecHeroe(props) {
  const style = {
    color: props.color,
  };

  return (
    <section className={styles.SecHeroe}>
      <div className={styles.logo} style={style}>
        <h1 className={styles.h1}>
          <span className={styles.bold}>littl</span>essentials
        </h1>
        {/* <img className={styles.element} src={props.src} alt="" /> */}

        <Parallax speed={-15}>
          <LElement color={style.color} width="100"></LElement>
        </Parallax>

        <h2 className={styles.h2}>simplifying parenthood in a conscious way</h2>
      </div>
    </section>
  );
}
