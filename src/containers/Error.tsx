import { Button, Flex, HStack, VStack, chakra } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <Flex alignItems="center" justifyContent="space-between" mx="auto">
      <VStack textAlign="center">
        <chakra.h1
          fontSize={{
            base: '4xl',
            md: '5xl',
          }}
          fontWeight={{
            base: 'bold',
            md: 'extrabold',
          }}
          mt={20}
        >
          Woops
        </chakra.h1>
        <chakra.h2
          fontSize={{
            base: '2xl',
            md: '3xl',
          }}
          fontWeight="bold"
        >
          Page Not Found
        </chakra.h2>
        <HStack mt={10}>
          <Link to="/">
            <Button variant="ghost">Go Home</Button>
          </Link>
        </HStack>
      </VStack>
    </Flex>
  )
}

export default Error
