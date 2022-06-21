import { FunctionComponent } from "react";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { FeaturedLabelReleaseSection } from "./FeaturedLabelReleaseSection";
import { NewsletterSection } from "./NewsletterSection";
import { DiscoverSection } from "./DiscoverSection";
import { Events } from "./Events";
import { LinksSocialsHeader } from "./LinksSocialsHeader";
import { ArticleHeroSection } from "./ArticleHeroSection";
import { ClincherParagraph } from "./ClincherParagraph";
import { CalloutShopSection } from "./CalloutShopSection";
import { HighlightsSection } from "./HighlightsSection";
import { NftArticle } from "./NftArticle";
import { LinksSocials } from "./LinksSocials";
import { LegalMention } from "./LegalMention";
import { Footer } from "./Footer";
import styles from "./css/HomePage.module.css";

export const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePageDiv}>
      <HeaderSection inmelogoSvg="inmelogosvg.svg" />
      <HeroSection />
      <FeaturedLabelReleaseSection />
      <NewsletterSection />
      <DiscoverSection />
      <Events />
      <LinksSocialsHeader />
      <main className={styles.mainArticlePage} id="Main Article Page">
        <div className={styles.blogArticleDiv}>
          <ArticleHeroSection />
          <ClincherParagraph />
          <CalloutShopSection />
          <div className={styles.conclusionEventTextDiv}>
            <p className={styles.theCollectionOf}>
              The collection of pieces form a diverse album, embracing a variety
              of states of mind. With the participation of first-class musicians
              and opening a new cycle in Eduardo Hopper’s career, Gratidão
              Infinita aims to sensitize a public open to his sound
              experimentation and vision.
            </p>
          </div>
          <HighlightsSection />
          <NftArticle />
          <LinksSocials />
          <LegalMention />
          <Footer />
        </div>
        <div className={styles.blogDiv} />
      </main>
    </div>
  );
};
