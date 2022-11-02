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
    <VStack spacing = '10px'>
      <ServerQuickActions/>
      
      <Flex 
        align={'center'}
        justify={'center'}>

      
        <Box bg='red' w='10%' p={4} color='white'>
          Candidato:
        </Box>
      </Flex>
      <Flex 
        align={'center'}
        justify={'center'}>
        <Box bg='red' w='10%' p={4} color='white'>
          Atuação:
        </Box>
      </Flex>
      <Flex 
        align={'center'}
        justify={'center'}>
        <Box bg='red' w='10%' p={4} color='white'>
          Curso:
        </Box>
      </Flex>
      <Flex 
        align={'center'}
        justify={'center'}>
        <Box bg='red' w='10%' p={4} color='white'>      
          Semestre:
        </Box>
      
      </Flex>
    </VStack>
      
    </>  
  );
};

export default Area_do_candidato;