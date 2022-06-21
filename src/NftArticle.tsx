import { FunctionComponent, useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import styles from "./css/NftArticle.module.css";

export const NftArticle: FunctionComponent = () => {
  const onButton1Click = useCallback(() => {
    /* TODO: Call API Subscribe NFT
       TODO// POP UP
    */
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
    <div className={styles.nftArticleDiv}>
      <img
        className={styles.nFTBackgroundIcon}
        alt=""
        src="nft-background@2x.png"
      />
      <img className={styles.blurIcon} alt="" src="blur1.svg" />
      <img className={styles.blurIcon1} alt="" src="blur2.svg" />
      <img className={styles.blurIcon2} alt="" src="blur3.svg" />
      <div className={styles.nFTFormDiv}>
        <img
          className={styles.nFTLogoIcon}
          alt=""
          src="nft-logo.svg"
          data-animate-on-scroll
        />
        <b className={styles.neverMissADrop}>Never miss a drop!</b>
        <div className={styles.subscribeToOurExclusiveAir}>
          Subscribe to Our Exclusive Air Drop List.
        </div>
        <TextField
          className={styles.emailFormTextField}
          sx={{ width: 376.9046630859375 }}
          color="primary"
          variant="filled"
          type="email"
          label="email"
          placeholder="enter your email here"
          size="medium"
          margin="none"
        />
        <button className={styles.button} autoFocus onClick={onButton1Click}>
          <b className={styles.subscribe}>Subscribe</b>
        </button>
      </div>
      <div className={styles.discordFormDiv}>
        <div className={styles.formDiscordDiv}>
          <img className={styles.glassmorphIcon} alt="" src="glassmorph.svg" />
          <b className={styles.joinOurCommunity}>Join our community</b>
          <button className={styles.button1} data-animate-on-scroll>
            <b className={styles.subscribe}>Launch Discord</b>
            <img
              className={styles.akarIconsdiscordFill}
              alt=""
              src="akariconsdiscordfill.svg"
            />
          </button>
        </div>
      </div>
      <div className={styles.coinNFTForm}>
        <div className={styles.formCoinsBuy}>
          <img
            className={styles.glassmorphIcon1}
            alt=""
            src="glassmorph1.svg"
          />
          <img className={styles.metaTextIcon} alt="" src="meta-text.svg" />
          <img className={styles.metamaskIcon} alt="" src="metamask.svg" />
          <button
            className={styles.buttonBuyNft}
            id="buy nft"
            data-animate-on-scroll
          >
            <b className={styles.buyNft}>BUY NFT</b>
          </button>
          <img
            className={styles.logoPolkadot1Icon}
            alt=""
            src="logopolkadot-1.svg"
          />
        </div>
      </div>
      <img className={styles.iconMusicNote} alt="" src="iconmusicnote.svg" />
      <img className={styles.iconMusicNote1} alt="" src="iconmusicnote1.svg" />
      <img className={styles.nftStoneIcon} alt="" src="nft-stone@2x.png" />
      <img className={styles.inmelogoSvgIcon} alt="" src="inmelogosvg2.svg" />
      <img className={styles.blurIcon3} alt="" src="blur4.svg" />
    </div>
  );
};
