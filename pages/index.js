
import logo_grande from "../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import WithSubnavigation from "../components/navbar";
import { Center } from "@chakra-ui/react";
import ClickMe from "../components/botao_cadastro";
import Edital from "../components/botao_edital";
import { SimpleGrid, bgGradient, Box } from '@chakra-ui/react'
function inicialPage(){
  return (
    <>
      < WithSubnavigation />
      <Head>
          <title>Insper Junior</title>
          <meta name="description" content="Insper Junior" />
          <link rel="icon" href="insper_junior_logo_pequeno.ico" />
      </Head>
      <div class="body">
        <div class="intro">
        <h2 class="ps" >Insper Processo Seletivo</h2>
        
        <p class="texto" > Nós da Insper Jr. somos uma empresa de consultoria formada exclusivamente por alunos do Insper, sem fins lucrativos, que visa impactar a sociedade por meio da superação de desafios.
        A fim de entregar excelência aos nossos clientes, trabalhamos em um ambiente colaborativo, com perfis e habilidades complementares, que busca pessoas inconformadas e comprometidas com nosso propósito de transformar realidades através de projetos.
        Em 2021, mesmo diante do contexto da pandemia do COVID-19, nosso faturamento superou R$ 700 mil, nos colocando como uma das maiores empresas juniores do Brasil.
        Para 2022 queremos atingir patamares cada vez maiores. Venha fazer parte do processo seletivo! </p>
        
      
        </div>
        
          <div className="conteudo">
            <div class="fase1">

              <h2>Fases do Processo de Business:</h2>
                <li> 1ª Fase: Prova de Lógica</li>
                <li>2ª Fase: Dinâmica em grupo</li>
                <li>3ª Fase: Case Interview</li>
                <li>4ª Fase: Entrevista</li>

            </div>
            <div class="fase2">

              <h2>Fases do Processo de Engenharia:</h2>
                <li>1ª Fase: Prova de Lógica</li>
                <li>2ª Fase: Dinâmica em grupo</li>
                <li>3ª Fase: Entrevista</li>

            </div>
          </div>
            
            <h1 class="finalização" >A descrição completa do Processo Seletivo está no nosso edital:</h1>
            <Edital />
      </div> 
    </>  
  )
}

export default inicialPage;

