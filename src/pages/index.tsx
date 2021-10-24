import { CardListContainer } from "@styles/page";
import { Container } from "@mui/material";
import { useCharacter } from "data/hooks/useCharacter";
import React from "react";
import { useEffect } from "react";
import { CharacterCard } from "ui/components/CharacterCard";

export default function Home() {
  const { characters } = useCharacter();

  return (
    <Container>
      <main>
        <h1>Os Vigadores das telonas</h1>
        <CardListContainer>
          {characters.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              thumbnail={char.thumbnail}
              comics={char.comics}
              series={char.series}
              stories={char.stories}
              events={char.events}
              description={char.description}
            />
          ))}
        </CardListContainer>
      </main>
    </Container>
  );
}
