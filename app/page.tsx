'use client';

import { chakra, Box, SimpleGrid } from '@chakra-ui/react'
import {
  Icon,
  Image,
  Flex,
  Link,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { BuySellWidget } from './BuySellWidget';

import { textStyles } from './theme';

export default function Home() {
  return (
    <Flex w='100%' maxW='1600px' m='auto'>
      <Flex direction='column'>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px' flex='auto'>
          <Box p={5}>
            <chakra.h3 {...textStyles.h3}>
              Bitcoin/CAD
            </chakra.h3>
            <chakra.h3 {...textStyles.h3b}>
              $23,456.78 <chakra.span {...textStyles.h3b} color='red' fontSize={{base: '12px'}}> -17.66% </chakra.span>
            </chakra.h3>
            <Image src='/chart-placeholder.png' mt={1} w='full' />
          </Box>

          <Box p={5}>
            <chakra.h3 {...textStyles.h3}>
              Bull Cash Balance
            </chakra.h3>

            <Box px={5} py={4} mb={5} mt={4} border={1} borderStyle='solid' borderRadius={30} borderColor='gray.400'>
              <chakra.h3 {...textStyles.h3}>
                Canadian dollar balance
              </chakra.h3>
              <chakra.h3 {...textStyles.h3b}>
                $500,000.00 <chakra.span {...textStyles.h3b} fontSize={{base: '12px'}}> CAD </chakra.span>
              </chakra.h3>
            </Box>

            <Box px={5} py={4} mb={5} mt={4} border={1} borderStyle='solid' borderRadius={30} borderColor='gray.400'>
              <chakra.h3 {...textStyles.h3}>
                Mexican pesos balance
              </chakra.h3>
              <chakra.h3 {...textStyles.h3b}>
                $5,000,000.00 <chakra.span {...textStyles.h3b} fontSize={{base: '12px'}}> MXN </chakra.span>
              </chakra.h3>
            </Box>
          </Box>

        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px'>
          <Box p={5}>
            <ActionButton title='Buy Bitcoin' text='Buy and transfer bitcoin directly to your wallet' href='#' />
            <ActionButton title='Sell Bitcoin' text='Sell bitcoin from your external wallet' href='#' />
          </Box>
          <Box p={5}>
            <ActionButton title='Deposit' text='Deposit funds into your Bull cash account' href='#' />
            <ActionButton title='Withdraw' text='Withdraw funds from your Bull cash account' href='#' />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px'>
          <Box px={5} pt={3}>
            <chakra.h3 {...textStyles.h3}>
              Payments
            </chakra.h3>
          </Box>
          <Box px={5}>
          </Box>

          <Box p={5}>
            <ActionButton title='Pay in Fiat with Bitcoin' text='Send BTC and we send fiat to any recipient or biller' href='#' />
            <ActionButton title='Get Paid with Bitcoin' text='Create a Bitcoin invoice. Receive either fiat or BTC' href='#' />
            <ActionButton title='Pay Bitcoin Invoice' text='Use your cash balance to pay someone in BTC' href='#' />
          </Box>
          <Box p={5}>
            <ActionButton title='Payroll Deposit' text='Receive fiat paycheck directly in cash balance' href='#' />
            <ActionButton title='Send Bull Transfer' text='Send fiat from cash account to a Bull user' href='#' />
            <ActionButton title='Receive Bull Transfer' text='Receive fiat from a Bull user into your cash account' href='#' />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px'>
          <Box px={5} pt={3}>
            <chakra.h3 {...textStyles.h3}>
              Wallets
            </chakra.h3>
          </Box>
          <Box px={5}>
          </Box>

          <Box p={5}>
            <ActionButton title='Pay in Fiat with Bitcoin' text='Send BTC and we send fiat to any recipient or biller' href='#' />
            <ActionButton title='Get Paid with Bitcoin' text='Create a Bitcoin invoice. Receive either fiat or BTC' href='#' />
            <ActionButton title='Pay Bitcoin Invoice' text='Use your cash balance to pay someone in BTC' href='#' />
          </Box>
          <Box p={5}>
            <ActionButton title='Payroll Deposit' text='Receive fiat paycheck directly in cash balance' href='#' />
            <ActionButton title='Send Bull Transfer' text='Send fiat from cash account to a Bull user' href='#' />
            <ActionButton title='Receive Bull Transfer' text='Receive fiat from a Bull user into your cash account' href='#' />
          </Box>
        </SimpleGrid>
      </Flex>

      <Box display={{ base: 'none', lg: 'flex'}} flex='auto' p={5} minW='420px'>
        <BuySellWidget />
      </Box>
    </Flex>
  )
}

const ActionButton = ({href, title, text}: {href: string, title: string, text: string}) => {
  return (
    <Flex mb={4}>
      <Image 
        boxSize='74px'
        borderRadius='12px'
        src="/bitcoin-icon.png" />
      <Box ml={2}>
        <Link {...textStyles.actionButtonTitle}> { title } </Link>
        <chakra.p {...textStyles.actionButtonText}>
          { text }
          <Icon ml={2} as={FiArrowRight} />
        </chakra.p>
      </Box>
    </Flex>
  );
}
;
