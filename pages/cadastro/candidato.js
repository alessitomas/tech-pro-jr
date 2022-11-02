import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import router from "next/router";
import WithSubnavigation_3 from "../../components/navbar_CADASTROS";
import { SimpleGrid, ButtonGroup, Box, Container, Input, Button, Flex, Stack } from '@chakra-ui/react'

export default function Forms () {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [curso, setCurso] = useState("");
  const [semestre, setSemestre] = useState("");
  const [atuacao, setAtuacao] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [bolsista, setBolsista] = useState("");
  const handleSubmit = async (event) => { 
    event.preventDefault();
    router.push('/login')
    // const router = useRouter();

    const formInfo = {
      nome,
      genero,
      nascimento,
      curso,
      semestre,
      atuacao,
      celular,
      email,
      horario,
      bolsista

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

        <p>Gênero</p>
        <Input onChange={({ target }) => setGenero(target?.value)} />
        <br/><br/>

        <p>Data de Nascimento</p>
        <Input onChange={({ target }) => setNascimento(target?.value)}   />
        <br/><br/>
        <p>Curso</p>

        <Input onChange={({ target }) => setCurso(target?.value)} />
        <br/><br/>

        <p>Semestre</p>
        <Input onChange={({ target }) => setSemestre(target?.value)} />
        <br/><br/>

        <p>Área de Atuação</p>
        <Input onChange={({ target }) => setAtuacao(target?.value)} />
        <br/><br/>

        <p>Bolsista</p>
        <Input onChange={({ target }) => setBolsista(target?.value)}  placeholder='Sim/Não'/>
        <br/><br/>

        <p>Número de celular</p>
        <Input onChange={({ target }) => setCelular(target?.value)}  placeholder='+11 (99) 9999-9999'/>
        <br/><br/>

        <p>Email</p>
        <Input onChange={({ target }) => setEmail(target?.value)}  placeholder='email@email.com.br'/>
        <br/><br/>
        <Stack variant="outline" spacing="5">
        <p>Horário de Disponibilidade</p>
        <Input onChange={({ target }) => setHorario(target?.value)} />
        <br/>

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
    <Box h='40px' bg=''></Box>

    </Stack>
  </Container>
  </div>
)
  }