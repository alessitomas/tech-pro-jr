import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { Login } from "../../components/botoes";
import {Cadastro_avaliador} from "../../components/botoes"
import {Sair} from "../../components/botoes"
import { useState } from "react";
import {Container, Input, Button} from '@chakra-ui/react'
import { axios } from "axios";

export default function Forms () {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [curso, setCurso] = useState("");
  const [semestre, setSemestre] = useState("");
  const [atuacao, setAtuacao] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");

  const handleSumit = async (event) => { 
    event.preventDefault();

    const formInfo = {
      nome,
      genero,
      nascimento,
      curso,
      semestre,
      atuacao,
      celular,
      email,
      horario

    }
    console.log("Infos", formInfo )

    try{
      console.log('eae')
      const {data} = await axios({
        url: "/api/cadastro_candidato",
        method: "POST",
        data: formInfo
      });
      console.log("Response-Back", data)
    } catch (error) {
      console.log("Error", error);
  }}

return (
  <Container>

    <Cadastro_avaliador/>
    <br/><br/>
    <p>Nome Completo</p>
      <Input onChange={({ target }) => setNome(target?.value)} />
      <br/><br/>

      <p>Gênero</p>
      <Input onChange={({ target }) => setGenero(target?.value)} />
      <br/><br/>

      <p>Data de Nascimento</p>
      <Input onChange={({ target }) => setNascimento(target?.value)}   />
      <br/><br/>
      <p>Curso</p>

      <Input onChange={({ target }) => setCurso(target?.value)} />
      <br/><br/>

      <p>Semestre</p>
      <Input onChange={({ target }) => setSemestre(target?.value)} />
      <br/><br/>

      <p>Área de Atuação</p>
      <Input onChange={({ target }) => setAtuacao(target?.value)} />
      <br/><br/>

      <p>Número de celular</p>
      <Input onChange={({ target }) => setCelular(target?.value)}  placeholder='+11 (99) 9999-9999'/>
      <br/><br/>

      <p>Email</p>
      <Input onChange={({ target }) => setEmail(target?.value)}  placeholder='email@email.com.br'/>
      <br/><br/>

      <p>Horário de Disponibilidade</p>
      <Input onChange={({ target }) => setHorario(target?.value)} />
      <br/>

    <button onClick={handleSumit} placeholder='Cadastrar'></button>

    <Sair/>

  </Container>
)
  }
