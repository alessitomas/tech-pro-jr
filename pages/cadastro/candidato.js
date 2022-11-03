import logo_grande from "../../public/insper_junior_logo_inteiro.png";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import router from "next/router";

import WithSubnavigation_3 from "../../components/navbar_CADASTROS";
import { SimpleGrid, ButtonGroup, Box, Container, Input, Button, Flex, Stack, FormControl, FormLabel, Select, Checkbox ,CheckboxGroup,useColorModeValue} from "@chakra-ui/react";


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
  <div >
    <WithSubnavigation_3/>
    <div class="bg">
    <Container  >
      
      <br/><br/>
      <p>Nome Completo</p>
        <Input onChange={({ target }) => setNome(target?.value)} />
        <br/><br/>

        <p>Gênero</p>
        <FormControl>
          <Select onChange={({ target }) => setGenero(target?.value)} placeholder='Gênero' color= 'grey'>
            <option>Homem</option>
            <option>Mulher</option>
          </Select>
        </FormControl> 
        <br/><br/>

        <p>Data de Nascimento</p>
        <Input onChange={({ target }) => setNascimento(target?.value)} placeholder="Selecione o Dia" size="md" type="date"/>

        <br/><br/>
        <p>Curso</p>

        <FormControl>
          <Select onChange={({ target }) => setCurso(target?.value)} placeholder='Escolha o seu curso' color= 'grey'>
            <option> Administração</option>
            <option> Ciência da Computação</option>
            <option> Direito</option>
            <option> Economia</option>
            <option> Engenharia da Computação</option>
            <option> Engenharia Mecânica</option>
            <option> Engenharia Mecatrônica</option>
v          </Select>
        </FormControl>  

        <br/><br/>

        <p>Semestre</p>
        <FormControl>
          <Select onChange={({ target }) => setSemestre(target?.value)} placeholder='Escolha o seu semestre' color= 'grey'>
            <option> 1°</option>
            <option> 2°</option>
            <option> 3°</option>
            <option> 4°</option>
            <option> 5°</option>
            <option> 6°</option>
            <option> 7°</option>
            <option> 8°</option>
            <option> 9°</option>
            <option> 10°</option>
v          </Select>
        </FormControl>  
        <br/><br/>

        <p>Área de Atuação</p>
        <FormControl>
          <Select onChange={({ target }) => setAtuacao(target?.value)} placeholder='Escolha sua área de atuação' color= 'grey'>
            <option>Business</option>
            <option>Engenharia</option>
          </Select>
        </FormControl>  
      <br></br>

        <p>Bolsista</p>
        <FormControl isRequired>
          <Select onChange={({ target }) => setBolsista(target?.value)} placeholder='Escolha se possui bolsa' color= 'grey'>
            <option>Sim</option>
            <option>Não</option>
          </Select>
        </FormControl>  
        <br/><br/>
        
        <p>Número de celular</p>
        <Input onChange={({ target }) => setCelular(target?.value)}  placeholder='+11 (99) 9999-9999'/>
        <br/><br/>

        <p>Email</p>
        <Input onChange={({ target }) => setEmail(target?.value)}  placeholder='email@email.com.br'/>
        <br/><br/>
        <Stack variant="outline" spacing="5">
        <p>Horário de Disponibilidade para a 1ª Fase</p>
        <FormControl>
        <CheckboxGroup onChange={({ target }) => setEmail(target?.value)}   colorScheme='red' defaultValue={[' Quarta - 18:45', ' Quinta - 20:15', ' Segunda - 19:15']}>
        <Stack spacing={[10, 1]} direction={['column', 'row']}>
        <Checkbox value='Quarta - 18:45'>Quarta - 18:45</Checkbox>
        <Checkbox value='Quinta - 20:15'>Quinta - 20:15</Checkbox>
        <Checkbox value='Segunda - 19:15'>Segunda - 19:15</Checkbox>
        </Stack>
        </CheckboxGroup>
        </FormControl>  
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
  </div>

)
  }