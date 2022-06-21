import { FunctionComponent, useCallback } from "react";
import styles from "./css/HeaderSection.module.css";

type HeaderSectionType = {
  inmelogoSvg?: string;
};

export const HeaderSection: FunctionComponent<HeaderSectionType> = ({
  inmelogoSvg,
}) => {
  const onHeaderLogoContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='linksSocialsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLabelLinkClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='featuredLabelReleaseSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onArtistsLinkClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='discoverSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProductsLinkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='productsH1Text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={styles.headerSection} id="header">
      <div className={styles.navBarDiv}>
        <div
          className={styles.headerLogoDiv}
          onClick={onHeaderLogoContainerClick}
        >
          <img className={styles.inmelogoSvgIcon} alt="" src={inmelogoSvg} />
        </div>
        <div className={styles.headerMenuNavbar}>
          <section className={styles.headerNavbarSection} id="navbar">
            <div className={styles.navBar1Div}>
              <a className={styles.label} onClick={onLabelLinkClick}>
                LABEL
              </a>
              <a className={styles.artists} onClick={onArtistsLinkClick}>
                ARTISTS
              </a>
              <a className={styles.productsA} onClick={onProductsLinkClick}>
                PRODUCTS
              </a>
              <a className={styles.productsA1}>EVENTS </a>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};
