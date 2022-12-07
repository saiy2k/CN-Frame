import {
  chakra,
  Box,
  Flex,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

import { Widget } from './shared-components';
import { textStyles } from './theme';

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
      <Box px={5} py={4} mb={5} mt={4} border={1} borderStyle='solid' borderRadius={30} borderColor='gray.400'>
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

export const ActionButton = ({href, title, text}: {href: string, title: string, text: string}) => {
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


