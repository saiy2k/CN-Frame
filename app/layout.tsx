'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

import Header from './header';
import Footer from './footer';
import './globals.css';

const theme = extendTheme({
  colors: {
    brand: '#C50909',
    brandAlpha: {
      "50": "#FEE7E7",
      "100": "#FCBBBB",
      "200": "#FA8F8F",
      "300": "#F86363",
      "400": "#F63737",
      "500": "#F40B0B",
      "600": "#C30909",
      "700": "#920707",
      "800": "#620404",
      "900": "#310202"
    },
  },
})


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
