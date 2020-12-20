import React, { useState, useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import * as routes from '../lib/routes'

import MovieCard from './MovieCard'

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(routes.MOVIES)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result)
      })
  }, [])

  return (
    <SimpleGrid columns={3} spacing={5} padding={5}>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </SimpleGrid>
  )
}

export default MovieList
