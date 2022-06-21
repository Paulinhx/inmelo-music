import { FunctionComponent } from "react";
import styles from "./css/LegalMention.module.css";

export const LegalMention: FunctionComponent = () => {
  return (
    <div className={styles.legalMentionDiv}>
      <img className={styles.shapeIcon} alt="" src="shape.svg" />
      <div className={styles.weAndorOurLicensorsAreTh}>
        We and/or our licensors are the owners of all intellectual property
        rights in the Website, and the Inmelo Website and the materials on the
        Website are protected by intellectual property laws around the world
        including copyright and trade mark laws.
      </div>
      <b className={styles.legalMentionB}>Legal Mention</b>
      <img className={styles.inner60Icon} alt="" src="inner-60.svg" />
    </div>
  );
};
