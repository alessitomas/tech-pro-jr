

import logo_grande from "../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { Login } from "../components/botoes";
import { Cadastro_candidato } from "../components/botoes";
import WithSubnavigation from "../components/navbar";

function inicialPage() {

  return (
    <>
    < WithSubnavigation />
    <Head>
      <title>Insper Junior</title>
      <meta name="description" content="Insper Junior" />
      <link rel="icon" href="insper_junior_logo_pequeno.ico" />
    </Head>
    

    <div className="texto_ps">
       Inserir texto aqui
    </div>

   </>  
  )
}

export default inicialPage;