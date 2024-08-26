import React from "react";
import styles from "./interests.module.css";

const Interests = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.ouvir}`}>
        <h3>🎧 Ouvir</h3>
        <p>
          <a href="https://youtu.be/YBwMeilZGzo?si=uFlLKzFq3OVyN_gB">
            Marcos Valle - Nova Bossa Nova
          </a>
        </p>
        <p>
          <a href="https://youtu.be/gGdGFtwCNBE?si=TQmZdRRS3qu7EU3c">
            The Killers - Mr. Brightside
          </a>
        </p>
        <p>
          <a href="https://youtu.be/oJptxg3n9Oc?si=SM-ykq4nE234vf1T">
            Uncle ACE - Blood Orange
          </a>
        </p>
      </div>
      <div className={`${styles.column} ${styles.jogar}`}>
        <h3>🎮 Jogar</h3>
        <p>
          <a href="https://store.steampowered.com/app/47810/Dragon_Age_Origins__Ultimate_Edition/">
            Dragon Age Origins
          </a>
        </p>
        <p>
          <a href="https://store.steampowered.com/app/1238040/Dragon_Age_II_Ultimate_Edition/">
            Dragon Age 2
          </a>
        </p>
        <p>
          <a href="https://store.steampowered.com/app/1222690/Dragon_Age_Inquisition/">
            Dragon Age Inquisition
          </a>
        </p>
      </div>
      <div className={`${styles.column} ${styles.assistir}`}>
        <h3>📺 Assistir</h3>
        <p>
          <a href="https://youtu.be/xlptXikE7X0?si=GPkeWpscFBnThB1S">
            X-men 97
          </a>
        </p>
        <p>
          <a href="https://youtu.be/EP8T-NFGo94?si=FuKmLnB4GWh95vo0">
            Sonic Prime
          </a>
        </p>
        <p>
          <a href="https://youtu.be/uw72J3WYxLI?si=uRsotfnJkpaRL5uJ">
            Doctor Who
          </a>
        </p>
      </div>
    </div>
  );
};

export default Interests;
