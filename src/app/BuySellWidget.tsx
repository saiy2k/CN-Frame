import { useState } from 'react';
import { 
  Box,
  Button,
  ButtonGroup,
  chakra,
  Image,
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
  Select,
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
                <Button colorScheme='blue'> Preview </Button>
              </Box>
            </form>

          </Stack>
        </TabPanel>

        <TabPanel>
          <Stack m={5}>

            <chakra.p {...textStyles.p} color='gray.400' mb={1}>
              We convert any btc amount that is sent to provided address. And your cash balance is incremented accordingly.
            </chakra.p>
            <br/>

            <chakra.p {...textStyles.p} color='gray.400' mb={1}>
              Select currency
            </chakra.p>
            <Select size='lg' placeholder='Select currency'>
              <option value='option1'> Canadian Dollars - CAD </option>
              <option value='option2'> Mexican pesos - MXN </option>
            </Select>
            <br/>

            <chakra.p {...textStyles.p} color='gray.400' mb={1}>
              Bitcoin price - quote expires in 30 seconds (timer)
            </chakra.p>
            <chakra.h3 {...textStyles.h3} mb={5}>
              $21,192.00 CAD
            </chakra.h3>
            <br/>

            <chakra.p {...textStyles.p} color='gray.400' mb={1}>
              Trade status
            </chakra.p>
            <chakra.h4 {...textStyles.h4} mb={5}>
              Awaiting payment
            </chakra.h4>
            <br/>

            <Tabs isFitted w='full'>
              <TabList>
                <Tab _selected={{ borderBottom: '6px', borderColor: useColorModeValue('gray.700', 'gray.50'), borderStyle: 'solid' }}> Bitcoin </Tab>
                <Tab _selected={{ borderBottom: '6px', borderColor: useColorModeValue('gray.700', 'gray.50'), borderStyle: 'solid' }}> Lightning </Tab>
              </TabList>

              <TabPanels>

                <TabPanel>
                  <Stack>

                    <chakra.p {...textStyles.p} color='gray.400' mb={1}>
                      Send bitcoin to this address
                    </chakra.p>

                    <b> bc19dsksiamdjaluekdmsdjfk293u5mksmd </b>

                    <chakra.p {...textStyles.p} color='gray.400' mt={1}>
                      or Scan this QR code
                    </chakra.p>

                    <Image src='/qrcode.png' />

                  </Stack>
                </TabPanel>

                <TabPanel>
                  <Stack>

                    <chakra.p {...textStyles.p} color='gray.400' mb={1}>
                      Send bitcoin to this lightning address
                    </chakra.p>

                    <b> satoshi@bullbitcoin.com </b>

                    <chakra.p {...textStyles.p} color='gray.400' mt={1}>
                      or Scan this LNURL-Pay code
                    </chakra.p>

                    <Image src='/qrcode.png' />

                  </Stack>
                </TabPanel>

              </TabPanels>
            </Tabs>

          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}


