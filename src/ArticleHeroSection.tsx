import { FunctionComponent, useCallback } from "react";
import styles from "./css/ArticleHeroSection.module.css";

export const ArticleHeroSection: FunctionComponent = () => {
  const onArticleHeroVideoClick = useCallback(() => {
    window.open("https://youtu.be/7BnXm6mChsA?t=12");
  }, []);

  return (
    <article className={styles.articleHeroSection} id="video">
      <div className={styles.articleHeroHeader}>
        <div className={styles.articleTitleDiv}>
          <h2 className={styles.articleCategoryH2}>THE LABEL</h2>
          <h1 className={styles.articleTitleH1}>Hello Everyone!</h1>
        </div>
      </div>
      <iframe
        className={styles.articleHeroVideo}
        src={`https://www.youtube.com/embed/7BnXm6mChsA?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
        onClick={onArticleHeroVideoClick}
      />
    </article>
  );
};
