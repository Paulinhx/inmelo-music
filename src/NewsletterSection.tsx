import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import styles from "./css/NewsletterSection.module.css";

export const NewsletterSection: FunctionComponent = () => {
  return (
    <section className={styles.newsletterSection} id="newsletter-contact-form">
      <div className={styles.newsletterDiv}>
        <img className={styles.blurIcon} alt="" src="blur.svg" />
        <img
          className={styles.newsletterBackgroungIcon}
          alt=""
          src="rectangle-193@2x.png"
        />
        <img className={styles.inmelogoSvgIcon} alt="" src="inmelogosvg1.svg" />
        <section className={styles.newsletterFormSection} id="form">
          <div className={styles.formHeaderDiv}>
            <h2 className={styles.formTitleSubtext}>Let’s Connect</h2>
            <h1 className={styles.formTitleH1}>Join our newsletter</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.formTextDiv}>
              <h3 className={styles.getOurMonthlyNewsletterFea}>
                Get our monthly newsletter featuring our artists, bookings ,
                press releases and new products!
              </h3>
              <div className={styles.willSendYouMonthlyUpdates}>
                * Will send you monthly updates to get to follow up with our
                Label events, new products and releases.
              </div>
            </div>
            <div className={styles.formFieldsDiv}>
              <TextField
                className={styles.emailAddressTextField}
                color="primary"
                variant="outlined"
                type="text"
                label="Your email adresse here"
                size="medium"
                margin="none"
              />
              <TextField
                className={styles.emailAddressTextField}
                color="primary"
                variant="outlined"
                type="text"
                label="Your name"
                size="medium"
                margin="none"
              />
              <button className={styles.describeMoreTextarea}>
                <button className={styles.formSubmitButton}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="rectangle-31.svg"
                  />
                  <div className={styles.subscribeDiv}>Subscribe</div>
                </button>
              </button>
            </div>
          </form>
        </section>
        <div className={styles.inmeloMusicNeuchtelSwitze} id="adresse">
          <p className={styles.inmeloMusicP}>Inmelo Music</p>
          <p className={styles.inmeloMusicP}>Neuchâtel, Switzerland</p>
          <p className={styles.independentMusicLabel}>
            Independent music label.
          </p>
        </div>
      </div>
    </section>
  );
};
