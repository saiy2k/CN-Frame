'use client';

import { Image } from '@chakra-ui/react'
import { HiBell } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';

import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

import { DesktopMainNav } from './desktopMainNav';
import { MobileNavItem } from './mobileNavItem';
import { NAV_ITEMS, USER_NAV_ITEMS } from './header.data';

import logoImage from '../../public/logo.svg';

/**
 * Base code Ref: https://chakra-templates.dev/navigation/navbar
 *
 * [Issue] Warning: Prop id did not match. Server: "popover-trigger-[n1]" Client: "popover-trigger-[n2]"
 * [Solution] https://github.com/chakra-ui/chakra-ui/issues/3020#issuecomment-949808770
 * Usage of 'id' and 'isLazy' in <Popover>
 *
 * [Issue] Warning: Portal: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
 * [Solution] https://github.com/chakra-ui/chakra-ui/issues/7057
 * PR on it's way. Ignore for now.
 */
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  console.log('WithSubnavigation :: isOpen ::', isOpen);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 6 }}
        px={{ base: 6 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>

        <Flex justify={{ base: 'start', md: 'start' }}>
          <Image
            src='/logo.svg'
            alt="Bull Bitcoin logo"
            width={[120, 160]}
          />
        </Flex>

        <Stack
          flex={{ base: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          <Flex
            display={{ base: 'flex', md: 'none' }}
            alignItems='center'
            justify={'flex-end'}>

            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />

            <Box ml={0}>
              <DesktopMainNav icon={HiBell} iconSize={6} href="#" label="Notification" children={null} />
            </Box>
            
            <Box ml={3}>
              <DesktopMainNav ml={3} icon={FaUser} iconSize={5} href="#" label="User" children={USER_NAV_ITEMS} />
            </Box>

          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <DesktopMainNav key={navItem.id} {...navItem} />
      ))}

      <DesktopMainNav icon={HiBell} iconSize={6} href="#" label="Notification" children={null} />
      
      <DesktopMainNav icon={FaUser} iconSize={5} href="#" label="User" children={USER_NAV_ITEMS} />

    </Stack>
  );
};


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>

      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.id} {...navItem} />
      ))}
    </Stack>
  );
};




