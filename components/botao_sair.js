
import {Image} from "@chakra-ui/react"
import router from 'next/router';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';


export default function Sair_botao() {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <Flex borderLeftRadius="0" justifyContent="center" alignItems="center">
        <Button
        onClick = {() => router.push('/')}

        // {...props}
        flex={0.5} 
        px={8}
        fontSize={'sm'}
        rounded={'full'}
        bg={'white.400'}
        color={'black'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }

        _hover={{
          bg: 'grey.400',
        }}
        _focus={{
          bg: 'grey.500',
          
        }}>
        
        Sair
        </Button>
        
    </Flex>
    );
  };
