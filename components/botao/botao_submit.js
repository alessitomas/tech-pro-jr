import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import {useRouter} from 'next/router';
import { useToast } from '@chakra-ui/react';


export default function FollowButtonWithShadow_3() {
  const router = useRouter();
  const toast = useToast();

  return (
    <Flex h="10vh" justifyContent="center" alignItems="center">
      <Button
        w="7rem"
        colorScheme="red"
        variant="solid"
        onClick={() => {
          toast({
            title: 'Enviado.',
            description: "Seu envio foi submetido!",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        }}>
        Enviar
      </Button>
    </Flex>
  );
}