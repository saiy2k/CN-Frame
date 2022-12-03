import { Box, Divider } from '@chakra-ui/react'
import { NavItem } from './header.data';

import {
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export const DesktopSubNav = ({ label, href }: NavItem) => {

  if (label === '---') {
    return <Box>
      <Divider w='20%' borderColor='gray.700' ml={2} />
    </Box>
  }

  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'2xl'}
      _hover={{ 
        bg: useColorModeValue('gray.900', 'gray.50'), 
        color: useColorModeValue('gray.50', 'gray.900')
      }}>
        <Text
          transition={'all .3s ease'}
          _groupHover={{ color: useColorModeValue('gray.50', 'gray.900') }}
          fontWeight={500}>
          {label}
        </Text>
    </Link>
  );

  // Ideally this should be
  // <DesktopSubNavItem> { label } </DesktopSubNavItem>

};
