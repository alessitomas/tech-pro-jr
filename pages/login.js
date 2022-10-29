import Head from "next/head";
import { Sair } from "../components/botoes";
import { Login_entrar } from "../components/botoes";



function paginaLogin(){
    return (
      <>
      <Head>
        <title>Insper Junior</title>
        <meta name="description" content="Insper Junior" />
        <link rel="icon" href="insper_junior_logo_pequeno.ico" />
      </Head>
  
      <div className="login">
            Loga bobao
      </div>

      <Login_entrar/>
      
      <Sair/>

    </>  
    )
  }
  
  export default paginaLogin;