import { FunctionComponent, useCallback } from "react";
import styles from "./css/FeaturedLabelReleaseSection.module.css";

export const FeaturedLabelReleaseSection: FunctionComponent = () => {
  const onFeaturedListen1Click = useCallback(() => {
    window.open(
      "https://soundcloud.com/user-675204599?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    );
  }, []);

  return (
    <section
      className={styles.featuredLabelReleaseSection}
      id="release"
      data-scroll-to="featuredLabelReleaseSection"
    >
      <img
        className={styles.featuredImageContainer}
        alt=""
        src="featured-image-container@2x.png"
      />
      <article className={styles.featuredLabelBlurb} id="release article">
        <article className={styles.featuredLabelCopywriting}>
          <h2 className={styles.featuredLabelCategory}>Featured Release</h2>
          <h1 className={styles.featuredLabelTitle}>
            <p className={styles.iMMLP002SSealedGatefold}>
              <span className={styles.iMMLP002S}>IMMLP-002-S / </span>
              <span>
                Sealed Gatefold Limited Edition 12" Vinyl with Original
                Screenprint
              </span>
            </p>
          </h1>
          <a
            className={styles.featuredLabelDescription}
            href="https://eduardohopper.bandcamp.com/"
            target="_blank"
          >
            <p className={styles.iMMLP002SSealedGatefold}>
              <span>CELEBRATES FRANCINE HOLLEY 100th ANNIVERSARY</span>
            </p>
            <p className={styles.iMMLP002SSealedGatefold}>
              <span>Limited Edition of 100 copies / 180g vinyl</span>
            </p>
            <p className={styles.iMMLP002SSealedGatefold}>
              <span>
                Following our wish to include visual artists in our projects,{" "}
              </span>
            </p>
            <p className={styles.viewFullReleasePage}>
              <span className={styles.viewFullRelease}>
                view full release page...
              </span>
            </p>
          </a>
        </article>
        <button
          className={styles.featuredListen}
          onClick={onFeaturedListen1Click}
        >
          <div className={styles.div}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.listenNowDiv}>Listen Now</div>
          <button className={styles.groupButton}>
            <img className={styles.ellipseIcon} alt="" src="ellipse-131.svg" />
            <img className={styles.polygonIcon} alt="" src="polygon-11.svg" />
          </button>
        </button>
      </article>
    </section>
  );
};
