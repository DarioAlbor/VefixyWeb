import React, { useRef, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import './css/navbar.css';

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: '#',
  },
  {
    label: 'Productos',
    children: [
      {
        label: 'Opción 1',
        href: '#',
      },
      {
        label: 'Opción 2',
        href: '#',
      },
      {
        label: 'Opción 3',
        href: '#',
      },
    ],
  },
  {
    label: '¿Quiénes somos?',
    href: '#',
  },
];

const LogoWithHat = () => {
  return (
    <Box>
      <Text
        textAlign="center"
        fontFamily="heading"
        fontWeight="bold"
        fontSize={{ base: 'xl', md: '2xl' }}
        color="#FFA600"
        display="inline-block"
      >
        Vefixy Network
      </Text>{' '}
      <Text fontSize="2xl" display="inline-block">
        🎅
      </Text>
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const productosMenuButtonRef = useRef();

  const openProductosMenu = () => {
    productosMenuButtonRef.current.click();
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={toggleMobileNav}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <LogoWithHat />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {/* Botón "Sign In" reemplazado con los iconos */}
          <IconButton
            as={'a'}
            href={'#'}  // Puedes ajustar el href según tus necesidades
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            aria-label={'XTwitter'}
            icon={<FaXTwitter />}
          />
          <IconButton
            as={'a'}
            href={'#'}  // Puedes ajustar el href según tus necesidades
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            aria-label={'Facebook'}
            icon={<FaFacebook />}
          />
          <IconButton
            as={'a'}
            href={'#'}  // Puedes ajustar el href según tus necesidades
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            aria-label={'GitHub'}
            icon={<FaGithub />}
          />
          <IconButton
            as={'a'}
            href={'#'}  // Puedes ajustar el href según tus necesidades
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            aria-label={'Instagram'}
            icon={<FaInstagram />}
          />

          {/* Botón "Soy Cliente" */}
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}  // Puedes ajustar el href según tus necesidades
            _hover={{
              bg: 'pink.300',
            }}
          >
            Soy Cliente
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen || mobileNavOpen} animateOpacity>
        <MobileNav toggleMobileNav={toggleMobileNav} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Flex
        direction="row"
        spacing={4}
        align="center"
        justify="center"  // Ajustado a 'center'
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Flex>
    );
  };

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
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
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ toggleMobileNav }) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} toggleMobileNav={toggleMobileNav} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, toggleMobileNav }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
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
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href} onClick={toggleMobileNav}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default Navbar;
