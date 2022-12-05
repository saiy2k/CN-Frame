import { 
  Button,
  ButtonGroup,
  chakra,
  Input,
  Link,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Radio, 
  RadioGroup, 
  Stack } from '@chakra-ui/react'

import { textStyles } from './theme';

export const BuySellWidget = () => {
  return (
    <Tabs isFitted w='full' border={1} borderStyle='solid' borderColor='gray.400' borderRadius={25}>
      <TabList>
        <Tab _selected={{ borderBottom: '6px', borderColor:'gray.700', borderStyle: 'solid' }}> Buy Bitcoin </Tab>
        <Tab _selected={{ borderBottom: '6px', borderColor:'gray.700', borderStyle: 'solid' }}> Sell Bitcoin </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack m={5}>
            <Radio size='lg' name='1' colorScheme='red'>
              <chakra.p {...textStyles.p} color='gray.400'>
                Available CAD funds
              </chakra.p>
              <chakra.p {...textStyles.h4b} >
                $23,230.28 <chakra.span fontSize={{base: '10px', xl: '12px' }}> CAD </chakra.span>
              </chakra.p>
            </Radio>

            <Radio size='lg' name='1'>
              <chakra.p {...textStyles.p} color='gray.400'>
                Available MXN funds
              </chakra.p>
              <chakra.p {...textStyles.h4b} >
                $3,12,934.28 <chakra.span fontSize={{base: '10px', xl: '12px' }}> MXN </chakra.span>
              </chakra.p>
            </Radio>

            <br />

            <chakra.p {...textStyles.p} color='gray.400'>
              Amount you send (icon)
            </chakra.p>
            <Input placeholder='Enter amount to buy' size='md' />

            <chakra.p {...textStyles.p} color='gray.400'>
              Amount you receive (icon)
            </chakra.p>
            <Input placeholder='Enter amount to receive' size='md' />


            <chakra.p {...textStyles.p} color='gray.400'>
              Add recipient address
            </chakra.p>
            <Input placeholder='Paste your address' size='md' />

            <br/>
            <Link href='#' my={5}>Use Lightning Network</Link>
            <br/>

            <Button colorScheme='blue'> Preview </Button>

          </Stack>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
