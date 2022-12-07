'use client';

import { 
  Box,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'

import { 
  ActionItems,
  BitcoinPrice, 
  CashBalance
} from './DashboardWidgets';

import {
  ActionButton,
  BuySellWidget
} from '@shared-components/index';

export default function Home() {

  const balances = [{
    name: 'Canadian dollar balance',
    amount: '$500,000.00',
    symbol: 'CAD'
  }, {
    name: 'Mexical pesos balance',
    amount: '$5,000,000.00',
    symbol: 'MXN'
  }];

  return (
    <Flex w='100%' maxW='1600px' m='auto'>
      <Flex direction='column'>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='4px' flex='auto'>

          <BitcoinPrice currency='CAD' />

          <CashBalance balances={balances} />

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
            <h3>
              Payments
            </h3>
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
            <h3>
              Wallets
            </h3>
          </Box>
          <Box px={5}>
          </Box>

          <Box p={5}>
            <ActionButton title='Forex' text='Convert cash balance to another currency' href='#' />
          </Box>
        </SimpleGrid>
      </Flex>

      <Box display={{ base: 'none', lg: 'flex'}} flexDirection='column' flex='auto' p={5} w='420px'>
        <BuySellWidget />
        <ActionItems />
      </Box>
    </Flex>
  )
}

