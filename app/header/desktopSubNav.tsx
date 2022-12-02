import { NavItem } from './header.data';

import {
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export const DesktopSubNav = ({ label, href }: NavItem) => {
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
};

