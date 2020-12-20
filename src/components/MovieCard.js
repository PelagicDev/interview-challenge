import React from 'react'
import { Box, Text } from '@chakra-ui/react'

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

export default MovieCard
