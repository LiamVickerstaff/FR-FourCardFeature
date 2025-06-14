import styles from "./FeatureCard.module.css";

interface FeatureCardTypes {
  cardTitle: string;
  cardDesc: string;
  ImgSrc: string;
  ImgAlt: string;
  BorderColor: string;
}

export default function FeatureCard({
  cardTitle,
  cardDesc,
  ImgSrc,
  ImgAlt,
  BorderColor,
}: FeatureCardTypes) {
  return (
    <article className={`${styles.FeatureCard} ${styles[BorderColor]}`}>
      <div className={styles.textGroup}>
        <h3 className={`${styles.CardTitle} TextPresetThree`}>{cardTitle}</h3>
        <p className={`${styles.CardDescription} TextPresetFive`}>{cardDesc}</p>
      </div>
      <img className={styles.Icon} src={ImgSrc} alt={ImgAlt} />
    </article>
  );
}
