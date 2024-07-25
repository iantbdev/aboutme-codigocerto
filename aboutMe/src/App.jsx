import React, { useState, useEffect } from "react";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import Preloader from "./components/Pre-Loader/preloader";

function App() {
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const words = ["Estudante", "Programador", "Desenvolvedor"];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <div>
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
          <span>(Scrolla pra baixo)</span>
        </div>
      )}
    </div>
  );
}

export default App;
