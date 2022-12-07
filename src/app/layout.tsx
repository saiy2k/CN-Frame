'use client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Header from './header/header';
import Footer from './footer';
import './globals.css';

import { inter, getBullBitcoinTheme } from '@theme/index';

const theme = getBullBitcoinTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}

