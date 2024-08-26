import React from "react";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import styles from "./motivation.module.css";

export default function Motivation() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <MDBTypography tag="h6">
              <span>
                Por que eu possuo interesse em fazer trabalho voluntário?
              </span>
            </MDBTypography>
            <p>
              Possuo interesse no trabalho de voluntariado na Trilha Front-End
              porque essa experiência pode me enriquecer na área e permitir que
              eu pratique e aprenda como é trabalhar com Front-End.
            </p>
          </div>
          <div className={styles.card}>
            <MDBTypography tag="h6">
              <span>Por que fazer a Trilha Front-End?</span>
            </MDBTypography>
            <p>
              Quero fazer a trilha Front-End porque possuo interesse e afinidade
              com a área, já que eu tenho familiaridade com o desenvolvimento
              web com React.
            </p>
          </div>
          <div className={styles.card}>
            <MDBTypography tag="h6">
              <span>Como eu posso contribuir para o projeto?</span>
            </MDBTypography>
            <p>
              Acredito que eu possa contribuir para o projeto com a criação de
              interfaces iterativas, criativas e bonitas que despertam a atenção
              do usuário.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
