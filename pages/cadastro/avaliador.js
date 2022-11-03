import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import router from "next/router";
import {useRouter} from 'next/router';
import { useToast } from '@chakra-ui/react';

import WithSubnavigation_admin from "../../components/navbar_admin";
import { SimpleGrid, ButtonGroup, Box, Container, Input, Button, Flex, Stack, FormControl, FormLabel, Select, Checkbox ,CheckboxGroup} from "@chakra-ui/react";

export default function Forms () {
  const [nome, setNome] = useState("");
  const [horario, setHoras] = useState("");
  const toast = useToast();


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
      <FormControl>
        <CheckboxGroup onChange={({ target }) => setHoras(target?.value)}   colorScheme='red' defaultValue={[' Quarta - 18:45', ' Quinta - 20:15', ' Segunda - 19:15']}>
        <Stack spacing={[10, 1]} direction={['column', 'row']}>
        <Checkbox value='Quarta - 18:45'>Quarta - 18:45</Checkbox>
        <Checkbox value='Quinta - 20:15'>Quinta - 20:15</Checkbox>
        <Checkbox value='Segunda - 19:15'>Segunda - 19:15</Checkbox>
        </Stack>
        </CheckboxGroup>
      </FormControl>  
      <br/><br/>


      <Button
        // onClick = {() = > {handleSubmit}
        w="7rem"
        colorScheme="red"
        variant="solid"
        onClick={() => {
          toast({
            title: 'Cadastrado.',
            description: "O avaliador foi cadastrado!",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        }}>
        Cadastrar
      </Button>
  </Container>
</div>
)
  }