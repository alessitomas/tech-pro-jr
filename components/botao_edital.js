import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import {useRouter} from 'next/router';

export default function FollowButtonWithShadow() {
  const router = useRouter();

  return (
    <Flex h="10vh" justifyContent="center" alignItems="center">
      <Button
        onClick = {() => router.push('https://drive.google.com/file/d/13crvOYw7QT3TH2SWAiwPEwfQ4MiV_GIB/view')}

        // {...props}
        
        flex={1} 
        mr={500}
        ml={400}
        fontSize={'sm'}
        rounded={'full'}
        bg={'red.500'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }

        _hover={{
          bg: 'red.400',
        }}
        _focus={{
          bg: 'red.400',
          
        }}>
        
        Edital
      </Button>
    </Flex>
  );
}