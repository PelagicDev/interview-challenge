import React from 'react'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
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
          <ModalHeader>{movie.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{movie.description}</p>
            <p>{movie.year}</p>
          </ModalBody>

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

export default MovieDetail
