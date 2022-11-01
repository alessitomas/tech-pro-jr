import logo from "../public/insper_junior_logo_inteiro.png"
import {Image} from "@chakra-ui/react"
import { useRouter } from 'next/router';
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
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation_3() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            // icon={
            //   isOpen ? <CloseIcon w={3} h={3} />
            // }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            
          </Text> */}
          <Image
          width = "199px"
          height = '70px'
          src='/insper_junior_logo_inteiro.png'
          alt='Insper Jr.'
          onClick = {() => router.push('/')}
          cursor = {'pointer'}
          />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'red.500'}
            onClick = {() => router.push('/cadastro/candidato')}
            _hover={{
              bg: 'red.400',
            }}>
            Sair
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
      </Collapse>
    </Box>
  );
}
