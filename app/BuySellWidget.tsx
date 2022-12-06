import { useState } from 'react';
import { 
  Box,
  Button,
  ButtonGroup,
  chakra,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Radio, 
  RadioGroup, 
  Stack,
  useColorModeValue} from '@chakra-ui/react'

import { textStyles } from './theme';

export const BuySellWidget = () => {

  const [value, setValue] = useState('1')

  return (
    <Tabs isFitted w='full' border={1} borderStyle='solid' borderColor='gray.400' borderRadius={25}>
      <TabList>
        <Tab _selected={{ borderBottom: '6px', borderColor: useColorModeValue('gray.700', 'gray.50'), borderStyle: 'solid' }}> Buy Bitcoin </Tab>
        <Tab _selected={{ borderBottom: '6px', borderColor: useColorModeValue('gray.700', 'gray.50'), borderStyle: 'solid' }}> Sell Bitcoin </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack m={5}>
            <form>
              <RadioGroup onChange={setValue} value={value} mb={5}>
                <Radio size='lg' colorScheme='red' value='0'>
                  <chakra.p {...textStyles.p} color='gray.400'>
                    Available CAD funds
                  </chakra.p>
                  <chakra.p {...textStyles.h4b} >
                    $23,230.28 <chakra.span fontSize={{base: '10px', xl: '12px' }}> CAD </chakra.span>
                  </chakra.p>
                </Radio>

                <Radio size='lg' colorScheme='red' value='1'>
                  <chakra.p {...textStyles.p} color='gray.400'>
                    Available MXN funds
                  </chakra.p>
                  <chakra.p {...textStyles.h4b} >
                    $3,12,934.28 <chakra.span fontSize={{base: '10px', xl: '12px' }}> MXN </chakra.span>
                  </chakra.p>
                </Radio>
              </RadioGroup>

              <chakra.p {...textStyles.p} color='gray.400' mb={1}>
                Amount you send (icon)
              </chakra.p>
              <InputGroup mb={3}>
                <Input placeholder='Enter amount to buy' size='md' />
                <InputRightElement mr={4} {...textStyles.p} > CAD </InputRightElement>
              </InputGroup>

              <chakra.p {...textStyles.p} color='gray.400' mb={1}>
                Amount you receive (icon)
              </chakra.p>
              <InputGroup mb={3}>
                <Input placeholder='Enter amount to receive' size='md' />
                <InputRightElement mr={4} {...textStyles.p} > BTC </InputRightElement>
              </InputGroup>


              <chakra.p {...textStyles.p} color='gray.400' mb={1}>
                Add recipient address
              </chakra.p>
              <InputGroup mb={8}>
                <Input placeholder='Paste your address' size='md' />
                <InputRightElement mr={4} {...textStyles.p} > Scan </InputRightElement>
              </InputGroup>

              <Box mb={8}>
                <Link href='#' color='blue' textDecor='underline'>Use Lightning Network</Link>
              </Box>

              <Box mb={8} textAlign='center'>
                <Button colorScheme='blue' px={25}> Preview </Button>
              </Box>
            </form>

          </Stack>
        </TabPanel>
        <TabPanel>
          <p> Todo </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
