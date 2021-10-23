import React from "react";
import "@styles/globals.css";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import { AppContainer } from "@styles/page/_app";
import theme from "ui/themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
