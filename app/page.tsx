'use client';

import { chakra, Box, SimpleGrid } from '@chakra-ui/react'
import styles from './page.module.css'

import {
  Text,
} from '@chakra-ui/react';


export default function Home() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing='4px' maxW='1280px' m='auto'>
      <Box bg='tomato'>
        <chakra.h1>
          Bitcoin/CAD
        </chakra.h1>
        <h4>
          $23,456.78 <span color='red'> -17.66% </span>
        </h4>
      </Box>
      <Box bg='tomato' height='80px'>
      </Box>
      <Box bg='tomato' height='80px'>
      </Box>
    </SimpleGrid>
  )
}
