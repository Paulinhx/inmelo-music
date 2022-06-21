import { FunctionComponent, useEffect } from "react";
import styles from "./css/LinksSocials.module.css";

export const LinksSocials: FunctionComponent = () => {
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
    <section className={styles.linksSocialsSection} id="social-links">
      <div
        className={styles.linksSocialsDiv}
        data-scroll-to="linksSocialsContainer"
      >
        <img
          className={styles.discordSvgrepoComCopy1}
          alt=""
          src="discordsvgrepocom-copy-11.svg"
        />
        <a
          className={styles.groupA}
          href="https://inmelomusic.bandcamp.com/community"
          target="_blank"
          data-animate-on-scroll
        >
          <img className={styles.groupIcon} alt="" src="group6.svg" />
          <img className={styles.vectorIcon} alt="" src="vector4.svg" />
          <img className={styles.groupIcon1} alt="" src="group7.svg" />
        </a>
        <a
          className={styles.mixcloudSvgrepoCom1A}
          href="https://www.mixcloud.com/Inmelo_Music/"
          target="_blank"
          data-animate-on-scroll
        >
          <img className={styles.vectorIcon1} alt="" src="vector5.svg" />
        </a>
        <img
          className={styles.instagramLogoSvgrepoCom1Icon}
          alt=""
          src="instagramlogosvgrepocom-11.svg"
        />
        <a
          className={styles.facebookSvgrepoCom1}
          href="https://www.facebook.com/Inmelo-Music-1009203265902594/"
          target="_blank"
          data-animate-on-scroll
        >
          <img className={styles.groupIcon2} alt="" src="group8.svg" />
          <img className={styles.groupIcon3} alt="" src="group9.svg" />
          <div className={styles.groupDiv}>
            <a
              className={styles.groupA1}
              href="https://www.facebook.com/Inmelo-Music-1009203265902594/"
              target="_blank"
            >
              <img className={styles.vectorIcon2} alt="" src="vector6.svg" />
            </a>
          </div>
        </a>
        <img className={styles.nftLogoMain} alt="" src="nft-logo-main1.svg" />
      </div>
    </section>
  );
};
