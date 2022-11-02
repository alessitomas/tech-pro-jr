

import logo_grande from "../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import WithSubnavigation from "../components/navbar";
import { Center } from "@chakra-ui/react";
import ClickMe from "../components/botao/botao_cadastro";

function inicialPage() {

  return (
    <>
    < WithSubnavigation />
    <Head>
      <title>Insper Junior</title>
      <meta name="description" content="Insper Junior" />
      <link rel="icon" href="insper_junior_logo_pequeno.ico" />
    </Head>
    <Center>
      <h1>Nós da Insper Jr. somos uma empresa de consultoria formada exclusivamente por alunos do Insper, sem fins lucrativos, que visa impactar a sociedade por meio da superação de desafios.
A fim de entregar excelência aos nossos clientes, trabalhamos em um ambiente colaborativo, com perfis e habilidades complementares, que busca pessoas inconformadas e comprometidas com nosso propósito de transformar realidades através de projetos.

Em 2021, mesmo diante do contexto da pandemia do COVID-19, nosso faturamento superou R$ 700 mil, nos colocando como uma das maiores empresas juniores do Brasil.

Para 2022 queremos atingir patamares cada vez maiores desenvolvendo nossos membros ao máximo.

Fases do Processo de Business:
1ª Fase: Prova de Lógica
2ª Fase: Dinâmica em grupo
3ª Fase - Case Interview
4ª Fase -  Entrevista

Fases do Processo de Engenharia:
1ª Fase: Prova de Lógica
2ª Fase: Dinâmica em grupo
3ª Fase - Entrevista



As datas de cada fase e uma melhor descrição estão no nosso edital:</h1>
      </Center>
      <ClickMe />
   </>  
  )
}

export default inicialPage;