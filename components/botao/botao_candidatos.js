import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    HStack
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  
  const ServerQuickActions = () => {
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" mt={6}>
        <HStack spacing='100px'>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="red"
              w="fit-content">
              1a Fase
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="red">
                <TabList>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Dia e Hora
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Sala
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* You can add your content here. */}
                    XX/YY/ZZZZ
                  </TabPanel>
                  <TabPanel>
                    Sala XYZ
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="red"
              w="fit-content">
              2a Fase
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="red">
              <TabList>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Dia e Hora
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Sala
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* You can add your content here. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Elementum curabitur vitae nunc sed velit dignissim sodales ut
                    eu. Mauris nunc congue nisi vitae suscipit tellus mauris a
                    diam. Eros in cursus turpis massa tincidunt.
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="red"
              w="fit-content">
              3a Fase
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="red">
              <TabList>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Dia e Hora
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Sala
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* You can add your content here. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Elementum curabitur vitae nunc sed velit dignissim sodales ut
                    eu. Mauris nunc congue nisi vitae suscipit tellus mauris a
                    diam. Eros in cursus turpis massa tincidunt.
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="red"
              w="fit-content">
              4a Fase
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="red">
              <TabList>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Dia e Hora
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="md"
                    fontWeight="bold"
                    w="50%">
                    Sala
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* You can add your content here. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Elementum curabitur vitae nunc sed velit dignissim sodales ut
                    eu. Mauris nunc congue nisi vitae suscipit tellus mauris a
                    diam. Eros in cursus turpis massa tincidunt.
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        </HStack>
      </Flex>

    );
  };
  
  export default ServerQuickActions;