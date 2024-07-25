import { useState, useEffect } from "react";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const words = ["Estudante", "Programador", "Desenvolvedor"];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Limpar o timer quando o componente desmontar
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
        <HashLoader size={50} color={"#e53939"} loading={loading} />
      ) : (
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
      )}
    </div>
  );
}

export default App;
