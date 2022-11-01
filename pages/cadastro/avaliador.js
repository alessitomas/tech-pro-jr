import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { Login } from "../../components/botoes";
import {Cadastro_candidato} from "../../components/botoes"
import {Sair,SubmitForm} from "../../components/botoes"
import { useState } from "react";
import {Container, Input, Button, Stack} from '@chakra-ui/react'
import axios from "axios";
import WithSubnavigation_3 from "../../components/navbar_CADASTROS";
import Sair_botao from "../../components/botao_sair";




export default function Forms () {
  const [nome, setNome] = useState("");
  const [horario, setGenero] = useState("");


  const handleSubmit = async (event) => { 
    event.preventDefault();

    const formInfo = {
      nome,
      horario

    }
    console.log("Infos", formInfo )

    try{
      console.log('eae')

      const { data } = await axios.post('http://localhost:8080/api/login', formInfo)
      console.log("Response-Back", data)
    } catch (error) {
      console.log("Error", error);
  }}

return (
  <div>
  <WithSubnavigation_3/>
  <Container>
    
    <br/><br/>
    <p>Nome Completo</p>
      <Input onChange={({ target }) => setNome(target?.value)} />
      <br/><br/>

      <p>Disponibilidade de Horário</p>
      <Input onChange={({ target }) => setGenero(target?.value)} />
      <br/><br/>

    <Stack variant="outline" spacing="10">
      <Button
        onClick = {handleSubmit}

        // {...props}
        // flex={1} 
        px={10}
        fontSize={'md'}
        rounded={'full'}
        bg={'red.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }

        _hover={{
          bg: 'red.500',
        }}
        _focus={{
          bg: 'red.500',
          
        }}>
        
        Login
      </Button>
    {/* </Flex> */}
    {/* <SimpleGrid rows={4} spacing={2}></SimpleGrid> */}

      <Sair_botao />
    </Stack>
  </Container>
  </div>
)
  }
