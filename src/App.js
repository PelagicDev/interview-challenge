import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'

import MovieList from './components/MovieList'

function App() {
  return (
    <Box bg="gray.300" h="100vh">
      <Container maxW="6xl" centerContent>
        <PageHeader />

        <MovieList />
      </Container>
    </Box>
  )
}

const PageHeader = () => (
  <Box bg="gray.600" w="100%" p={4} color="white" textAlign="center">
    <Heading>Movies Database</Heading>
  </Box>
)

export default App
