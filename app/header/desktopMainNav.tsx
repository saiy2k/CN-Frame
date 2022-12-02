import {
  Box,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from '@chakra-ui/react';

import { DesktopSubNav } from './desktopSubNav';

export const DesktopMainNav = ({href, children, label, icon, iconSize}: any) => {
  const linkColor = useColorModeValue('black', 'gray.200');
  const linkHoverColor = useColorModeValue('brand', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Popover trigger={'hover'} placement={'bottom-start'} id={'popover'} isLazy>
      <PopoverTrigger>

        { icon ?
          <Link> 
            <Icon as={icon} 
              w={iconSize}
              h={iconSize}
              mt={1}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }} />
          </Link>
          :
          <Link
            p={2}
            href={href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}>
            {label}
          </Link>}


      </PopoverTrigger>

      {children && (
        <PopoverContent
          border={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.800', 'gray.700')}
          bg={popoverContentBgColor}
          p={4}
          rounded={'sm'}
          w={'18em'}>
          <Stack>
            {children.map((child: any) => (
              <DesktopSubNav key={child.id} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

