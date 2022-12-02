'use client';

import Image from 'next/image';
import { HiBell } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { NAV_ITEMS, USER_NAV_ITEMS, NavItem } from './header.data';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

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
            src={logoImage}
            alt="Bull Bitcoin logo"
            width={160}
          />
        </Flex>

        <Stack
          flex={{ base: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          <Flex
            display={{ base: 'flex', md: 'none' }}
            justify={'flex-end'}
            flex={{ base: 1, md: 'auto' }}>

            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />

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
  const linkColor = useColorModeValue('black', 'gray.200');
  const linkHoverColor = useColorModeValue('brand', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.id}>
          <Popover trigger={'hover'} placement={'bottom-start'} id={'popover'} isLazy>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? 'google.com'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.800', 'gray.700')}
                bg={popoverContentBgColor}
                p={4}
                rounded={'sm'}
                w={'18em'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.id} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}

      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'} id={'popover'} isLazy>
          <PopoverTrigger>
            <Link> 
              <Icon as={HiBell} 
                w={6}
                h={6}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }} />
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.800', 'gray.700')}
            bg={popoverContentBgColor}
            p={4}
            rounded={'sm'}
            w={'18em'}>
            <Stack>
              <div> Notif 01 </div>
              <div> Notif 02 </div>
              <div> Notif 03 </div>
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>

      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'} id={'popover'} isLazy>
          <PopoverTrigger>
            <Link> 
              <Icon as={FaUser} 
                mt={0.5}
                w={5}
                h={5}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }} />
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.800', 'gray.700')}
            bg={popoverContentBgColor}
            p={4}
            rounded={'sm'}
            w={'18em'}>
            <Stack>
              {USER_NAV_ITEMS.map((child) => (
                <DesktopSubNav key={child.id} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, id }: NavItem) => {
  return (
  <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.900', 'gray.50'), color: useColorModeValue('gray.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: useColorModeValue('gray.50', 'gray.900') }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'gray.50'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
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

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.id} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


