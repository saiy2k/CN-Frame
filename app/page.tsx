'use client';

import { chakra, Box, SimpleGrid } from '@chakra-ui/react'
import {
  Icon,
  Image,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { textStyles } from './theme';


export default function Home() {
  return (
    <Flex w='100%' maxW='1280px' m='auto'>
      <Flex direction='column'>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px' flex='auto'>
          <Box bg='gray.50' p={5}>
            <chakra.h3 {...textStyles.bbh3}>
              Bitcoin/CAD
            </chakra.h3>
            <chakra.h3 {...textStyles.bbh3b}>
              $23,456.78 <chakra.span {...textStyles.bbh3b} color='red' fontSize={{base: '16px'}}> -17.66% </chakra.span>
            </chakra.h3>
            <Image src='/chart-placeholder.png' />
          </Box>
          <Box bg='gray.50' p={5}>
            <chakra.h3 fontSize={{ base: '20px', lg: '32px' }} fontWeight={[300]} lineHeight={{ base: '40px', lg: '48px'}} color='black'>
              Bull Cash Balance
            </chakra.h3>
            <Box p={5} border={1} borderStyle='solid' borderRadius={30} mb={5}>
              <chakra.h3 fontSize={{ base: '20px', lg: '24px' }} fontWeight={[300]} lineHeight={{ base: '40px', lg: '32px'}} color='black'>
                Canadian dollar balance
              </chakra.h3>
              <chakra.h3 fontSize={{ base: '32px', lg: '32px' }} fontWeight={[700]} lineHeight={{ base: '40px', lg: '48px'}} color='black'>
                $500,000.00 <chakra.span fontSize={{base: '16px'}} fontWeight={[700]}> CAD </chakra.span>
              </chakra.h3>
            </Box>
            <Box p={5} border={1} borderStyle='solid' borderRadius={30}>
              <chakra.h3 fontSize={{ base: '20px', lg: '24px' }} fontWeight={[300]} lineHeight={{ base: '40px', lg: '32px'}} color='black'>
                Mexican pesos balance
              </chakra.h3>
              <chakra.h3 fontSize={{ base: '32px', lg: '32px' }} fontWeight={[700]} lineHeight={{ base: '40px', lg: '48px'}} color='black'>
                $5,000,000.00 <chakra.span fontSize={{base: '16px'}} fontWeight={[700]}> MXN </chakra.span>
              </chakra.h3>
            </Box>
            
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px'>
          <Box bg='gray.50' p={2}>
            <ActionButton title='Buy Bitcoin' text='Buy and transfer bitcoin directly to your wallet' />
            <ActionButton title='Sell Bitcoin' text='Buy and transfer bitcoin directly to your wallet' />
          </Box>
          <Box bg='gray.50' p={2}>
            <ActionButton title='Deposit' text='Buy and transfer bitcoin directly to your wallet' />
            <ActionButton title='Withdraw' text='Buy and transfer bitcoin directly to your wallet' />
          </Box>
        </SimpleGrid>
      </Flex>

      <Box display={{ base: 'none', lg: 'flex'}} flex='auto' bg='red.50'>
        Buy / Sell widget
        Ole ole oleee oleee oleeeeee!
      </Box>
    </Flex>
  )
}

const ActionButton = ({title, text}: {title: string, text: string}) => {
  return (
    <Flex>
      <Image 
        boxSize='74px'
        src="https://www.maxpixel.net/static/photo/1x/Symbol-Bitcoin-Logo-Logo-Currency-Bitcoin-Icon-6219383.png" />
      <Box>
        <Link {...textStyles.actionButtonTitle}> { title } </Link>
        <p {...textStyles.actionButtonText}>
          { text }
          <Icon ml={2} as={FiArrowRight} />
        </p>
      </Box>
    </Flex>
  );
}
