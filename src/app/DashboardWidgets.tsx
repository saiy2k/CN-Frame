import {
  chakra,
  Box,
  Icon,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

import { FiArrowRight } from 'react-icons/fi';

import { Widget } from '@shared-components/index';

export const BitcoinPrice = ({currency}: {currency: string}) => {

  return (
    <Widget>
      <h3>
        Bitcoin/{currency}
      </h3>
      <h2>
        $23,456.78 <chakra.span color={'#ff0000'} fontSize={{base: '12px'}}> -17.66% </chakra.span>
      </h2>
      <Image src='/chart-placeholder.png' mt={1} w='full' />
    </Widget>
  );
}

export const CashBalance = ({balances}: {balances: Array<any>}) => {


  return (
    <Widget>
      <h3>
        Bull Cash Balance
      </h3>

      { balances.map((balance: any) => (
      <Box key={balance.symbol} px={5} py={4} mb={5} mt={4} border={1} borderStyle='solid' borderRadius={30} borderColor='gray.400'>
        <h3>
          { balance.name }
        </h3>
        <h2>
          { balance.amount } <chakra.span fontSize={{base: '12px'}}> { balance.symbol } </chakra.span>
        </h2>
      </Box>
      )) }

    </Widget>
  );
}

export const ActionItems = () => {
  return (
    <>
      <chakra.h3 mt={5}>
        Action Items
      </chakra.h3>
      <Link href='#' color={useColorModeValue('#4EA0DB', '#4EA0DB')}>
        Verify identity
        <Icon ml={1} as={FiArrowRight} />
      </Link>
      <Link href='#' color={useColorModeValue('#4EA0DB', '#4EA0DB')}>
        Join the mission program
        <Icon ml={1} mt={1} as={FiArrowRight} />
      </Link>
    </>
  )
}
