import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import router from "next/router";

import WithSubnavigation_admin from "../../components/navbar_admin";
import { SimpleGrid, ButtonGroup, Box, Container, Input, Button, Flex, Stack, FormControl, FormLabel, Select, Checkbox ,CheckboxGroup} from "@chakra-ui/react";

export default function Forms () {
  const [nome, setNome] = useState("");
  const [horario, setGenero] = useState("");


  const handleSubmit = async (event) => { 
    event.preventDefault();
    router.push('/area/admin/avaliador')

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
<WithSubnavigation_admin/>
  <Container>
    <br/><br/>
    <p>Nome Completo</p>
      <Input onChange={({ target }) => setNome(target?.value)} />
      <br/><br/>

      <p>Disponibilidade de Horário</p>
      <Input onChange={({ target }) => setGenero(target?.value)} />
      <br/><br/>


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
        
        Cadastrar
      </Button>
  </Container>
</div>
)
  }