import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'

import * as routes from './lib/routes'

import MovieCard from './components/MovieCard'

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

export default App
