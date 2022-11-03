import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import WithSubnavigation_3 from "../../components/navbar_CADASTROS";
import ServerQuickActions from '../../components/botao/botao_candidatos';
import {Box, Flex, VStack, Textarea, Spacer,useColorModeValue} from '@chakra-ui/react'

import {Box, Flex, VStack, Textarea, Spacer} from '@chakra-ui/react'
import  FollowButtonWithShadow_3 from '../../components/botao/botao_submit'
function Area_do_avaliador(){
  
  return (
    <>
    <Head>
          <title>Insper Junior</title>
          <meta name="description" content="Insper Junior" />
          <link rel="icon" href="insper_junior_logo_pequeno.ico" />
    </Head>

    <WithSubnavigation_3/>
    <div classname= "bg">
      <ServerQuickActions/>
    <Box h='60px' ></Box>
    <VStack spacing ={10} align='stretch'>
      <Flex 
        align={'center'}
        justify={'center'}
        >

        <Box   border='1px' w='50%' p={4} color='black'>
        
          <p>Candidatos a serem avaliados:</p>
          <br></br>
          <p>Atuação dos candidatos:</p>
          <br></br>
          <p>Curso dos candidatos:</p>
          <br></br>
          <p>Semestre dos candidatos:</p>
   
        </Box>    
      </Flex>
      <Box>
      <Flex align='center' justify= 'center' >
      <Textarea w = '55%' bg = 'grey.100' placeholder='Avaliação dos candidatos' />
      </Flex>
      </Box>
      <FollowButtonWithShadow_3/>
    </VStack>
    </div>
     

      </>  
  );
};

export default Area_do_avaliador;