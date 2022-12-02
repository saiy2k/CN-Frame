'use client';

import Image from 'next/image'
import styles from './page.module.css'

import {
  Text,
} from '@chakra-ui/react';


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <Text fontSize={['2em', '2.5em', '3em']} textAlign='center'>
          Welcome to <b>Cyphernode Admin</b>
        </Text>

      </main>

    </div>
  )
}
