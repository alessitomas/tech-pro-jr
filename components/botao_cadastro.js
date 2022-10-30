import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import {useRouter} from 'next/router';

export default function FollowButtonWithShadow() {
  const router = useRouter();

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        onClick = {() => router.push('/cadastro/candidato')}

        // {...props}
         flex={1} 
        px={8}
        fontSize={'sm'}
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
        
        Cadastre-se Já!
      </Button>
    </Flex>
  );
}