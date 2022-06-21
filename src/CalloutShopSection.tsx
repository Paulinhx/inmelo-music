import { FunctionComponent, useCallback } from "react";
import styles from "./css/CalloutShopSection.module.css";

export const CalloutShopSection: FunctionComponent = () => {
  const onViewFullGalleryButtonClick = useCallback(() => {
    window.open("https://inmelomusic.bandcamp.com/music");
  }, []);

  return (
    <section className={styles.calloutShopSection} id="shop presentation">
      <img
        className={styles.calloutImagesIcon}
        alt=""
        src="callout-images@2x.png"
      />
      <article className={styles.calloutCopywritingArticle} id="quote">
        <div className={styles.calloutTitleDiv}>
          <img className={styles.vectorIcon} alt="" src="vector3.svg" />
          <h1 className={styles.oneOfTheBestAlbumWeveDo}>
            One of the best album we’ve done so far...
          </h1>
        </div>
        <div className={styles.calloutTextDiv}>
          <p className={styles.weBelieveIn}>
            We believe in supporting and promoting artists equally, whether they
            are our neighbors from down the street, or legends from the other
            side of the world.
          </p>
          <p className={styles.weBelieveIn}>&nbsp;</p>
          <p className={styles.ourSoulbrotherEduardo}>
            Our soulbrother Eduardo Hopper delivers here his first completely
            instrumental authorial production. Congratulations for this total
            Masterpiece!
          </p>
        </div>
        <button
          className={styles.viewFullGalleryButton}
          onClick={onViewFullGalleryButtonClick}
        >
          <img className={styles.buttonIcon} alt="" src="button.svg" />
          <div className={styles.shopOurProductsHere}>
            <p className={styles.weBelieveIn}>Shop our Products here!</p>
          </div>
        </button>
      </article>
    </section>
  );
};
