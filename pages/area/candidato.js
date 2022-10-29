import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { Login } from "../../components/botoes";
import {Cadastro_avaliador} from "../../components/botoes"


function Cadastro_candidato(){
  return (
    <>
    <Head>
      <title>Insper Junior</title>
      <meta name="description" content="Insper Junior" />
      <link rel="icon" href="insper_junior_logo_pequeno.ico" />
    </Head>

    <Cadastro_avaliador/>
    
    <div className="texto_ps">
        Cadastro Candidato
    </div>

    <Login/>
   </>  
  )
}

export default Cadastro_candidato;