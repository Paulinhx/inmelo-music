import { FunctionComponent, useCallback } from "react";
import styles from "./css/Footer.module.css";

export const Footer: FunctionComponent = () => {
  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='discoverMusicWithUs']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer className={styles.footer} id="footer">
      <img className={styles.footerImgIcon} alt="" src="header-1@2x.png" />
      <div className={styles.inmeloMusicNeuchtelSwitze} id="adresse">
        <p className={styles.inmeloMusicP}>Inmelo Music</p>
        <p className={styles.inmeloMusicP}>Neuchâtel, Switzerland</p>
        <p className={styles.independentMusicLabel}>Independent music label.</p>
      </div>
      <a
        className={styles.copyrightPaulinhx2022Al}
        href="mailto:paul@hylematiere.com?subject=inmelo webdev"
      >
        Copyright @ Paulinhx, 2022. All Rights Reserved.
      </a>
      <b className={styles.aboutUs} onClick={onAboutUsTextClick}>
        About Us
      </b>
    </footer>
  );
};
