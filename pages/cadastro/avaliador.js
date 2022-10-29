import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { Login } from "../../components/botoes";
import {Cadastro_candidato} from "../../components/botoes"
import {Sair} from "../../components/botoes"


function Cadastro_avaliador(){
  return (
    <>
    <Head>
      <title>Insper Junior</title>
      <meta name="description" content="Insper Junior" />
      <link rel="icon" href="insper_junior_logo_pequeno.ico" />
    </Head>
    
    <Sair/>

    <Cadastro_candidato/>   
    <div className="texto_ps">
        Cadastro avaliador
    </div>

    <Login/>
   </>  
  )
}

export default Cadastro_avaliador;