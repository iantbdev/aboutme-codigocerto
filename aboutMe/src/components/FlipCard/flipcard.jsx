import React, { useState } from "react";
import CardFlip from "react-card-flip";
import styles from "./flip.module.css";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function FlipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div>
      <CardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className={styles.card} onClick={FlipCard}>
          <h1 className={styles.name}>Ian Dionísio Barbosa da Silva</h1>

          <img
            src="https://media.licdn.com/dms/image/v2/D4D35AQFpyuCJYFGcag/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1716214041027?e=1725289200&v=beta&t=yD_yMXcrDCLebvFUPJkY5JlTsI_H0X6GkFv38El5GIQ"
            alt="Ian"
            className={styles.profileImage}
          />
          <span className={styles.age}>21 anos</span>
        </div>
        <div className={`${styles.card} ${styles.cardBack}`} onClick={FlipCard}>
          <h2>Quem sou eu?</h2>
          <p>
            Sou estudante de Tecnologia da Informação que possui interesse na
            área de Front-End (foco em React) e na criação de interfaces
            interativas e cativantes.
          </p>
          <p>
            Atualmente, estou a procura de um estágio como desenvolvedor
            Front-End e experiências para praticar o que eu sei.
          </p>
        </div>
      </CardFlip>
    </div>
  );
}
