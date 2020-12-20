import React, { useState, useEffect } from 'react'
import { Box, Container } from '@chakra-ui/react'

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
    <Container maxW="6xl" padding={2} centerContent>
      <Box>
        {movies.map((movie) => (
          <div>{movie.title}</div>
        ))}
      </Box>
    </Container>
  )
}

export default App
