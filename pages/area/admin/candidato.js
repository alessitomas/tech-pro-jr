import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
// import styles from "../styles/Search.module.css";



export const Search = () => {
  const [filter, setFilter] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [candidatos, setCandidatos] = useState();

  useEffect(() => {
    async function getProps() {
      const apiResponse = await fetch(
        `colocar banco de dados com todos os candidatos aqui`,
        {
          headers: {
            "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_HOST}`,
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      const { data } = await apiResponse.json();

      const { todos_candidatos } = data;

      setCandidatos(todos_candidatos);
      setLoaded(true);
    }
    getProps();
  }, []);

  async function handleChange(event) {
    setFilter(event.target.value);
    console.log(event.target.value)
  }
  async function handleSubmit({ nome, genero, nascimento, curso, semestre, atuacao, celular, email, horario }) {
    const myApiResponse = await axios
      .post(
        // `https://covision-backend.herokuapp.com/api/bookmarks/`,
        // botatr nossa api aqui
        {
          nome: nome,
          genero: genero,
          nascimento: nascimento,
          curso: curso,
          semestre: semestre,
          atuacao: atuacao,
          celular: celular,
          email: email,
          horario: horario,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data)
      // .then((e) => console.log(e))
      .catch(() => null);
  }
  if (loaded && !!candidatos) {
    return (
      <>
      <Head>
        <title>Insper Junior</title>
        <meta name="description" content="Insper Junior" />
        <link rel="icon" href="insper_junior_logo_pequeno.ico" />
      </Head>
        <Toolbar />
        <div className={styles.container}>
          <div className={styles.search_container}>
            <TextField
              label="Procure por candidatos"
              onChange={handleChange}
              className={styles.search_input}
              size="small"
            />
          </div>
          <div className={styles.main}>
            {candidatos
              .filter((e) => e.keyId.includes(filter))
              .map((info, index) => (
                <div
                  key={index}
                  className={styles.case_container}
                  id={info.keyId}
                >
                  <div className={styles.info_container}>
                    <h2>{info.name}</h2>
                    <p >{info.genero}</p>
                    <p >{info.nascimento}</p>
                    <p >{info.curso}</p>
                    <p >{info.semestre}</p>
                    <p >{info.atuacao}</p>
                    <p >{info.celular}</p>
                    <p >{info.email}</p>
                    <p >{info.horario}</p>
                    <div>
                      <p>Dados</p>
                      <p >{info.confirmed}</p>
                    </div>
                  </div>
                  <div className={styles.save_container}>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
};

export default Search;
