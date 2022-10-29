import { useRouter } from "next/router";
// import styles from "../styles/components/Toolbar.module.css";

export const Login = () => {
  const router = useRouter();
  return (
        <button type="button" onClick={() => router.push("/login")}> Login</button>
    
  );
};

export const Cadastro_candidato = () => {
    const router = useRouter();
    return (
        <button type="button" onClick={() => router.push("/cadastro/candidato")}> Cadastrar como candidato</button>
    );
  };

  export const Cadastro_avaliador = () => {
    const router = useRouter();
    return (
        <button type="button" onClick={() => router.push("/cadastro/avaliador")}>Cadastrar como Avaliador</button>
    );
  };

  export const Sair = () => {
    const router = useRouter();
    return (
        <button type="button" onClick={() => router.push("/")}> Sair</button>
    );
  };

  export const Login_entrar = () => {
    const router = useRouter();
    return (
          <button type="button" onClick={() => router.push("/area/candidato")}> Entrar</button>
      
    );
  };