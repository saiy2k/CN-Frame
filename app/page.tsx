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
          <Box bg='gray.50' p={2}>
            <chakra.h3 {...textStyles.h3}>
              Bitcoin/CAD
            </chakra.h3>
            <h4>
              $23,456.78 <span color='red'> -17.66% </span>
            </h4>
          </Box>
          <Box bg='gray.50' p={2}>
            <chakra.h3 {...textStyles.h3}>
              Bull Cash Balance
            </chakra.h3>
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
