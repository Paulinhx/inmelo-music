import { FunctionComponent } from "react";
import styles from "./css/DiscoverSection.module.css";

export const DiscoverSection: FunctionComponent = () => {
  return (
    <section
      className={styles.discoverSection}
      id="artists"
      data-scroll-to="discoverSectionContainer"
    >
      <div className={styles.discoverMusicHeader}>
        <label
          className={styles.discoverMusicWithUs}
          data-scroll-to="discoverMusicWithUs"
        >
          Discover our Talents
        </label>
        <h2 className={styles.ourArtistsH2}> INMelo label’s artists</h2>
      </div>
      <article className={styles.artistCardsRow} id="card-artists">
        <div className={styles.frameDiv}>
          <a
            className={styles.eduardoCard}
            href="https://www.instagram.com/eduardohopper/"
            target="_blank"
          >
            <img
              className={styles.eduardo1Icon}
              alt="eduardo hopper"
              src="eduardo-1@2x.png"
            />
            <div className={styles.cardTitleDiv}>
              <h3 className={styles.eduardoHopperH3}>Eduardo Hopper </h3>
              <h4 className={styles.discoverH4} id="discover">
                Discover
              </h4>
            </div>
          </a>
          <a
            className={styles.clapophonicCard}
            href="http://www.josuabeureux.ch/wp/"
            target="_blank"
          >
            <img
              className={styles.clapoband2Icon}
              alt=""
              src="clapoband-2@2x.png"
            />
            <div className={styles.cardTitleDiv1}>
              <h3 className={styles.eduardoHopperH3}>Clapophonic</h3>
              <h4 className={styles.discoverH4} id="discover">
                Discover
              </h4>
            </div>
          </a>
        </div>
        <div className={styles.frameDiv}>
          <a
            className={styles.mathieuCard}
            href="https://mathieuscheubertrio.bandcamp.com/album/new-sky-live-au-grand-cachot-de-vent"
            target="_blank"
          >
            <img
              className={styles.mathieu2Icon}
              alt=""
              src="mathieu-2@2x.png"
            />
            <div className={styles.cardTitleDiv1}>
              <h3 className={styles.mathieuScheuberTrio}>
                Mathieu Scheuber Trio
              </h3>
              <h4 className={styles.discoverH4} id="discover">
                Discover
              </h4>
            </div>
          </a>
          <a
            className={styles.ketepikaCard}
            href="https://soundcloud.com/ketepica"
            target="_blank"
          >
            <img
              className={styles.ketepika1Icon}
              alt=""
              src="ketepika-1@2x.png"
            />
            <div className={styles.cardTitleDiv1}>
              <h3 className={styles.mathieuScheuberTrio}>Ketepica</h3>
              <h4 className={styles.discoverH4} id="discover">
                Discover
              </h4>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
};
