import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import WithSubnavigation_3 from "../../components/navbar_CADASTROS";
import ServerQuickActions from '../../components/botao/botao_candidatos';
import {Box, Flex, VStack} from '@chakra-ui/react'

function Area_do_candidato(){
  
  return (
    <>
    <Head>
          <title>Insper Junior</title>
          <meta name="description" content="Insper Junior" />
          <link rel="icon" href="insper_junior_logo_pequeno.ico" />
    </Head>

    <WithSubnavigation_3/>
      <ServerQuickActions/>
    <Box h='60px' bg=''></Box>

      <Flex 
        align={'center'}
        justify={'center'}>

      
        <Box bg='' border='1px' w='40%' p={4} color='black'>
        
          <p>Candidato:</p>
          <br></br>
          <p>Atuação:</p>
          <br></br>
          <p>Curso:</p>
          <br></br>
          <p>Semestre:</p>
   
        </Box>
      </Flex>
      
    </>  
  );
};

export default Area_do_candidato;