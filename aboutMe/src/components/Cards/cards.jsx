import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Typewriter } from "react-simple-typewriter";
import "../../index.css";
import FlipCard from "../FlipCard/flipcard";
import Line from "../../assets/Line.svg";
import Line2 from "../../assets/Line2.svg";
import Interests from "../Interests/interests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Motivation from "../../components/Motivations/motivation";
import Line3 from "../../assets/Line3.svg";

export default function Cards() {
  const alignCenter = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const alignLeft = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const alignRight = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };

  return (
    <div>
      <Parallax pages={5} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <h1>
            <Typewriter
              words={[
                "Olá, sou Ian!",
                "Sou estudante e desenvolvedor",
                "Bem vindo à minha página! :)",
              ]}
              loop={2}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.4}
          speed={0.1}
          factor={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img src={Line} alt="ScrollDown" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.2}
          style={{
            ...alignCenter,
            justifyContent: "center",
            backgroundColor: "#e53939",
            color: "#ffffff",
          }}
        >
          <h2>Sobre Mim</h2>
          <div style={{ marginTop: "40px" }}>
            <FlipCard />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.75}
          speed={2}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img src={Line2} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <h2 style={{ color: "white" }}>Gostos Pessoais</h2>
          <span style={{ color: "white" }}>
            Além de programar, eu gosto de...
          </span>
          <Interests />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={1.2}
          style={{
            ...alignCenter,
            justifyContent: "center",
            backgroundColor: "#e53939",
            color: "#ffffff",
          }}
        >
          <h2>Motivações</h2>
          <span>
            Por que eu quero participar da comunidade Codigo Certo Coders?
          </span>
          <Motivation />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={1}
          style={{
            ...alignLeft,
            justifyContent: "center",
          }}
        >
          <img
            src={Line3}
            alt="Linha"
            style={{ marginLeft: "20px", width: "40vh" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.8}
          speed={0.15}
          style={{
            ...alignRight,

            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/11218/11218277.png"
            alt="Interrogação"
            style={{ marginRight: "20px" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <h1>É só isso... por enquanto</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <a
              href="www.linkedin.com/in/ian-dionísio-8a9630250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="iconStyle" />
            </a>
            <a
              href="https://github.com/iantbdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="iconStyle" />
            </a>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
