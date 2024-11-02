import { useEffect, useState } from "react";
import Bloque1 from "./components/bloque1/Bloque1";
import Bloque2 from "./components/bloque2/Bloque2";
import Bloque3 from "./components/bloque3/Bloque3";
import axios from "axios";
import styles from "./App.module.scss"

const App = () => {
  const [bloques, setBloques] = useState([]); // Array de bloques

  useEffect(() => {
    axios
      .get("http://dev5.conwayandpartners.com:1340/api/pages", {
        params: {
          fields: ["title", "slug"],
          populate: {
            components: {
              on: {
                "text.block1": { populate: "*" },
                "text.block2": {
                  populate: { background: { fields: ["url", "mime"] } },
                },
                "text.block3": { populate: "*" },
              },
            },
          },
          filters: { slug: "home" },
        },
      })
      .then((res) => {
        const datosObtenidos =
          res.data.data?.length === 1 ? res.data.data[0] : null;

        if (datosObtenidos) {
          // Guardamos los componentes en el estado como un array de bloques
          setBloques(datosObtenidos.components);
        }
        console.log(datosObtenidos); // Mostrar los datos en la consola
      })
      .catch((err) => console.log(err));
  }, []);
  // Renderizar dinámicamente según el tipo de bloque
  const renderBloque = (bloque) => {
    switch (bloque.__component) {
      case "text.block1":
        return <Bloque1 key={bloque.__component} data={bloque} />;
      case "text.block2":
        return <Bloque2 key={bloque.__component} data={bloque} />;
      case "text.block3":
        return <Bloque3 key={bloque.__component} data={bloque} />;
      default:
        return null;
    }
  };

  return <div className={styles.wrapper}>{bloques.map((bloque) => renderBloque(bloque))}</div>;
};

export default App;
