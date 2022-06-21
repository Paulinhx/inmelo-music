import { FunctionComponent } from "react";
import styles from "./css/Events.module.css";

export const Events: FunctionComponent = () => {
  return (
    <section className={styles.eventsSection} id="events">
      <div className={styles.titlesEventsDiv}>
        <h2 className={styles.catchUpToOurEVENTS}>catch up to our EVENTS</h2>
        <h1 className={styles.recentEventsH1}>Recent Events </h1>
      </div>
      <div className={styles.eventFrameDiv} id="event div">
        <a
          className={styles.picLeftEvents}
          href="https://www.youtube.com/watch?v=7BnXm6mChsA"
          target="_blank"
        >
          <img className={styles.frameIcon} alt="" src="frame-725@2x.png" />
        </a>
        <div className={styles.infosDiv} id="event article">
          <div className={styles.infoFrameDiv}>
            <article className={styles.frameArticle}>
              <img
                className={styles.eduardo1Icon}
                alt=""
                src="eduardo-11@2x.png"
              />
              <div className={styles.frameDiv}>
                <h3 className={styles.eduardoHopperConcertInIta}>
                  Eduardo Hopper, concert in Italy
                </h3>
                <div className={styles.theAmazingEduardoIsGiving}>
                  <span>
                    The amazing Eduardo is giving away some tickets and here is
                    the way to get them.{" "}
                  </span>
                  <span className={styles.viewFullArtist}>
                    view full artist page...
                  </span>
                </div>
              </div>
            </article>
            <article className={styles.frameArticle}>
              <img
                className={styles.eduardo1Icon}
                alt=""
                src="inemelorecords-1@2x.png"
              />
              <div className={styles.frameDiv1}>
                <h3 className={styles.newReleaseOpenNight}>
                  New release Open Night
                </h3>
                <div className={styles.welcomeToOurNewReleaseNig}>
                  <p className={styles.welcomeToOurNewReleaseNig1}>
                    <span>Welcome to our new release night, </span>
                  </p>
                  <p className={styles.inNefchatelAndAbroadView}>
                    <span>in Neûfchatel and abroad. </span>
                    <span className={styles.viewFullArtist}>
                      view full event page...
                    </span>
                  </p>
                </div>
              </div>
            </article>
            <article className={styles.frameArticle}>
              <img
                className={styles.eduardo1Icon}
                alt=""
                src="eduardo-edit-record-1@2x.png"
              />
              <div className={styles.frameDiv}>
                <h3 className={styles.eduardoHopperConcertInIta}>
                  Eduardo Hopper, Special Release!
                </h3>
                <div className={styles.theAmazingEduardoIsGiving}>
                  <span>
                    It’s a delight to send away this record in the shops today
                    and host a concert in Italy.{" "}
                  </span>
                  <span className={styles.viewFullArtist}>
                    view full artist page...
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
