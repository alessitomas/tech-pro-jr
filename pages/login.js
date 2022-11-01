import Head from "next/head";
import { Sair } from "../components/botoes";
import { Login_entrar } from "../components/botoes";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import WithSubnavigation from "../components/navbar";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import WithSubnavigation4 from "../components/navbar_com_botao_sair";


export default function paginaLogin(){
  const router = useRouter();
    return (
      <>
      <WithSubnavigation4/>
      <Head>
        <title>Insper Junior</title>
        <meta name="description" content="Insper Junior" />
        <link rel="icon" href="insper_junior_logo_pequeno.ico" />
      </Head>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color = {'red.500'}>Faça login na sua conta</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            e acompanhe o seu processo seletivo!
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Lembre-se de mim</Checkbox>
                <Link color={'red.500'}>Esqueceu sua senha?</Link>
              </Stack>
              <Button
                onClick = {() => router.push('/')}
                bg={'red.500'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}