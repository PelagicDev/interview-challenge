import React from 'react'
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react'

import MovieCard from './MovieCard'

const MovieDetail = ({ movie }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box margin={5}>
      <MovieCard title={movie.title} onOpen={onOpen} />

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex w="90%">
              <Text fontSize="xl">{movie.title}</Text>
              <Box marginLeft={4}>
                <Badge
                  ml="1"
                  fontSize="0.8em"
                  variant="outline"
                  colorScheme="green"
                >
                  {movie.year}
                </Badge>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <MovieContent movie={movie} />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

const MovieContent = ({ movie }) => {
  const { description, stars, writers, directors } = movie

  return (
    <ModalBody fontSize="lg">
      <p>{description}</p>
      <Divider margin={3} />

      <Box>
        <Text fontSize="lg" as="u">
          Starring:
        </Text>
        {stars.map((star) => (
          <UnorderedList spacing={3}>
            <ListItem>
              <Text>
                {star.actor} as <Text as="i">{star.character}</Text>
              </Text>
            </ListItem>
          </UnorderedList>
        ))}
      </Box>
      <Divider margin={3} />

      <Box>
        <Text as="u" marginRight={2}>
          Directors:
        </Text>
        <Text as="i">{directors.join(', ')}</Text>
      </Box>
      <Box>
        <Text as="u" marginRight={2}>
          Writers:
        </Text>
        <Text as="i">{writers.join(', ')}</Text>
      </Box>
    </ModalBody>
  )
}

export default MovieDetail
