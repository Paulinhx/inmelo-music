import { FunctionComponent, useCallback } from "react";
import styles from "./css/HeroSection.module.css";

export const HeroSection: FunctionComponent = () => {
  const onComponent1ButtonClick = useCallback(() => {
    window.open("https://inmelomusic.bandcamp.com/merch");
  }, []);

  const onFeaturedListenClick = useCallback(() => {
    window.open(
      "https://soundcloud.com/user-675204599?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    );
  }, []);

  return (
    <section className={styles.heroSection} id="label">
      <div className={styles.heroImageSimur2Div} />
      <img className={styles.photoHeroIcon} alt="" src="photo-hero@2x.png" />
      <div className={styles.heroContainerDiv}>
        <div className={styles.heroContentContainer}>
          <div className={styles.heroContentContainer782} id="label text">
            <h1 className={styles.heroTitleH1} id="label h1">
              <span>Inmelo Music’s </span>
              <span className={styles.span}> </span>
              <span className={styles.missionIsTo}>
                {" "}
                mission is to share the music that moves with you , from jazz
                and soul to modern brazilian fusion and broken beats.
              </span>
            </h1>
          </div>
          <div className={styles.callToActionsRow}>
            <button
              className={styles.component1Button}
              onClick={onComponent1ButtonClick}
            >
              <img
                className={styles.rectangleIcon}
                alt=""
                src="rectangle-3.svg"
              />
              <a className={styles.shopOurProductsHere} target="_blank">
                <p className={styles.shopOurProducts}>Shop our Products here</p>
              </a>
            </button>
            <button
              className={styles.featuredListen}
              onClick={onFeaturedListenClick}
            >
              <div className={styles.div}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.listenNowDiv}>Listen Now</div>
              <button className={styles.groupButton}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="ellipse-13.svg"
                />
                <img
                  className={styles.polygonIcon}
                  alt=""
                  src="polygon-1.svg"
                />
              </button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
