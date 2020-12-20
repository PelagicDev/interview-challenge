import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

import * as routes from './lib/routes'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(routes.MOVIES)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result)
      })
  }, [])

  return (
    <Box bg="gray.300">
      <Container maxW="6xl" centerContent>
        <PageHeader />
        <SimpleGrid columns={3} spacing={5} padding={5}>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const PageHeader = () => (
  <Box bg="gray.600" w="100%" p={4} color="white" textAlign="center">
    <Heading>Movies Database</Heading>
  </Box>
)

const MovieCard = ({ movie }) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    padding={3}
    borderColor="gray.600"
  >
    <Text>{movie.title}</Text>
  </Box>
)

export default App
