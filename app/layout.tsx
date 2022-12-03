'use client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Header from './header/header';
import Footer from './footer';
import './globals.css';

import { getBullBitcoinTheme, theme1 } from './theme';

const theme = getBullBitcoinTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}

