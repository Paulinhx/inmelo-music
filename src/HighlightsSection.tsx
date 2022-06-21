import { FunctionComponent, useCallback, useEffect } from "react";
import styles from "./css/HighlightsSection.module.css";

export const HighlightsSection: FunctionComponent = () => {
  const onButtonBuyClick = useCallback(() => {
    window.open("https://inmelomusic.bandcamp.com/merch");
  }, []);

  const onBcBandcampLogoSvgrepoCom1LinkClick = useCallback(() => {
    window.open("https://eduardohopper.bandcamp.com/album/gratid-o-infinita");
  }, []);

  const onA3197792969101LinkClick = useCallback(() => {
    window.open(
      "https://mathieuscheubertrio.bandcamp.com/album/new-sky-live-au-grand-cachot-de-vent"
    );
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <section className={styles.highlightsSection} id="products">
      <div className={styles.productsH1Div} data-scroll-to="productsH1Text">
        Products
      </div>
      <article className={styles.productsArticle} id="products article">
        <div className={styles.productsDiv} id="cards products">
          <div className={styles.cardsVertical}>
            <img
              className={styles.productCardIcon}
              alt=""
              src="productcard@2x.png"
            />
            <img
              className={styles.imgTshirtinmeloIcon}
              alt=""
              src="tshirtinmelo-3@2x.png"
            />
            <div className={styles.shapeDiv} />
            <b className={styles.streetWearB}>Street Wear</b>
            <div className={styles.handprintedBambooTee}>
              <p className={styles.handprintedBamboo}>
                Handprinted  Bamboo Tee
              </p>
            </div>
            <button className={styles.buttonBuy} onClick={onButtonBuyClick}>
              <b className={styles.bUY}>BUY </b>
            </button>
          </div>
          <div className={styles.cardsVertical}>
            <img
              className={styles.productsRecordCardIcon}
              alt=""
              src="inm3-1@2x.png"
            />
            <div className={styles.shapeDiv} />
            <b className={styles.musicB}>Music</b>
            <div className={styles.clapophonicSwitzerlandDiv}>
              <span className={styles.clapophonicSwitzerlandTxtContainer}>
                <p className={styles.handprintedBamboo}>Clapophonic</p>
                <p className={styles.switzerlandP}>Switzerland</p>
              </span>
            </div>
            <img
              className={styles.bcBandcampLogoSvgrepoCom1Icon}
              alt=""
              src="bcbandcamplogosvgrepocom-1.svg"
            />
          </div>
          <div className={styles.cardsVertical}>
            <img
              className={styles.productsRecordCardIcon1}
              alt=""
              src="inm2-1@2x.png"
            />
            <div className={styles.shapeDiv} />
            <b className={styles.musicB}>Music</b>
            <div className={styles.eduardoHopperBrazil}>
              <span className={styles.clapophonicSwitzerlandTxtContainer}>
                <p className={styles.handprintedBamboo}>Eduardo Hopper</p>
                <p className={styles.switzerlandP}>Brazil</p>
              </span>
            </div>
            <a
              className={styles.bcBandcampLogoSvgrepoCom1}
              onClick={onBcBandcampLogoSvgrepoCom1LinkClick}
            >
              <img className={styles.groupIcon} alt="" src="group4.svg" />
            </a>
          </div>
          <div className={styles.cardsVertical}>
            <a
              className={styles.a3197792969101}
              onClick={onA3197792969101LinkClick}
            />
            <div className={styles.shapeDiv} />
            <b className={styles.musicB}>Music</b>
            <div className={styles.mathieuScheuberTrioSwitzerl}>
              <span className={styles.clapophonicSwitzerlandTxtContainer}>
                <p className={styles.handprintedBamboo}>
                  Mathieu Scheuber Trio
                </p>
                <p className={styles.switzerlandP}>Switzerland</p>
              </span>
            </div>
            <a
              className={styles.bcBandcampLogoSvgrepoCom11}
              href="https://mathieuscheubertrio.bandcamp.com/album/new-sky-live-au-grand-cachot-de-vent"
              target="_blank"
              data-animate-on-scroll
            >
              <img className={styles.groupIcon} alt="" src="group5.svg" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
