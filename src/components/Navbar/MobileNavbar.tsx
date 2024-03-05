import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { navItems } from './_data'

export const MobileDrawer = (props: Omit<DrawerProps, 'children'>) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="16">
        <Stack spacing="6" align="stretch">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button size="lg" variant="text" colorScheme="gray">
                {item.label}
              </Button>
            </Link>
          ))}
          <Button>Sign Up</Button>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
)
