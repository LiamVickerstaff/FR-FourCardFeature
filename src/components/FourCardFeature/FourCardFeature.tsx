import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./FourCardFeature.module.css";

export default function FourCardFeature() {
  return (
    <section className={styles.FourCardFeature}>
      <section className={styles.TextSection}>
        <h2 className={styles.Title}>
          <span className={`${styles.LightTitle} TextPresetTwo`}>
            Reliable, efficient delivery
          </span>{" "}
          <span className={`${styles.BoldTitle} TextPresetOne`}>
            Powered by Technology
          </span>
        </h2>
        <p className={`${styles.DescriptionText} TextPresetFour`}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <section className={styles.CardGroupLayout}>
        <FeatureCard
          cardTitle="Supervisor"
          cardDesc="Monitors activity to identify project roadblocks"
          ImgSrc="/icon-supervisor.svg"
          ImgAlt="Magnifying glass icon"
          BorderColor="Cyan"
        />
        <div className={styles.CardPairLayout}>
          <FeatureCard
            cardTitle="Team Builder"
            cardDesc="Scans our talent network to create the optimal team for your project"
            ImgSrc="/icon-team-builder.svg"
            ImgAlt="Icon of small house infront of web browser"
            BorderColor="Red"
          />
          <FeatureCard
            cardTitle="Karma"
            cardDesc="Regularly evaluates our talent to ensure quality"
            ImgSrc="/icon-karma.svg"
            ImgAlt="Light bulb icon"
            BorderColor="Orange"
          />
        </div>
        <FeatureCard
          cardTitle="Calculator"
          cardDesc="Uses data from past projects to provide bett er delivery estimates"
          ImgSrc="/icon-calculator.svg"
          ImgAlt="Icon of analytics on a computer"
          BorderColor="Blue"
        />
      </section>
    </section>
  );
}
