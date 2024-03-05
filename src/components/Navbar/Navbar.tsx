import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Logo } from '../Logo'
import { MobileDrawer } from './MobileNavbar'
import { ToggleButton } from './ToggleButton'
import { navItems } from './_data'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const mobileNavbar = useDisclosure()
  return (
    <Box
      as="section"
      borderBottomWidth="1px"
      bg="bg.surface"
      position="relative"
      zIndex="tooltip"
    >
      <HStack justify="space-between" py="4" px="4" minH={20}>
        <Logo />
        {isDesktop ? (
          <HStack spacing="2">
            <ButtonGroup
              size="md"
              variant="text"
              colorScheme="gray"
              spacing="8"
            >
              {navItems.map((item) => (
                <Link to={item.href} key={item.href}>
                  <Button>{item.label}</Button>
                </Link>
              ))}
            </ButtonGroup>
          </HStack>
        ) : (
          <>
            <ToggleButton
              onClick={mobileNavbar.onToggle}
              isOpen={mobileNavbar.isOpen}
              aria-label="Open Menu"
            />
            <MobileDrawer
              isOpen={mobileNavbar.isOpen}
              onClose={mobileNavbar.onClose}
            />
          </>
        )}
        {isDesktop && <Button>Sign Up</Button>}
      </HStack>
    </Box>
  )
}
