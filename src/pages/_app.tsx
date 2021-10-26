import React from "react";
import "@styles/globals.css";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import { AppContainer } from "@styles/page/_app";
import theme from "ui/themes/theme";
import { Header } from "ui/components/Header";
import { CharacterProvider } from "data/hooks/useCharacter";
import { Footer } from "ui/components/Footer";
import { CharacterDetailProvider } from "data/hooks/useCharacterDetails";
import { ComicProvider } from "data/hooks/useComic";
import { EventProvider } from "data/hooks/useEvent";
import { ComicDetailProvider } from "data/hooks/useComicDetail";
import { EventDetailProvider } from "data/hooks/useEventDetail";
import { SerieDetailProvider } from "data/hooks/useSerieDetail";
import { SerieProvider } from "data/hooks/useSerie";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="404.png" sizes="any" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CharacterProvider>
          <CharacterDetailProvider>
            <SerieProvider>
              <SerieDetailProvider>
                <ComicProvider>
                  <EventProvider>
                    <EventDetailProvider>
                      <ComicDetailProvider>
                        <AppContainer>
                          <Header />
                          <Component {...pageProps} />
                          <Footer />
                        </AppContainer>
                      </ComicDetailProvider>
                    </EventDetailProvider>
                  </EventProvider>
                </ComicProvider>
              </SerieDetailProvider>
            </SerieProvider>
          </CharacterDetailProvider>
        </CharacterProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
