import { FunctionComponent } from "react";
import styles from "./css/ClincherParagraph.module.css";

export const ClincherParagraph: FunctionComponent = () => {
  return (
    <div className={styles.clincherParagraphDiv}>
      <h3 className={styles.clincherTitleH3}>Itiberê Ensemble Suíça</h3>
      <div className={styles.clincherTextDiv}>
        <p className={styles.itiberZwarg}>
          Itiberê Zwarg à Etoy pour une création
        </p>
        <p className={styles.itiberZwarg}>
          « BRASIL JAZZ UNIVERSAL » unique et inédite
        </p>
        <p className={styles.liveOnSaturday}>
          Live on Saturday, 12. February 2022, 8:30 pm (CET/GMT+1){" "}
        </p>
      </div>
    </div>
  );
};
