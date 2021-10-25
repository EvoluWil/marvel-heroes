import React, { useEffect } from "react";
import { CardListContainer, IndexContainer } from "@styles/page";
import { Title } from "ui/components/Title";
import { useCharacterDetail } from "data/hooks/useCharacterDetails";
import { useRouter } from "next/dist/client/router";
import { CharacterDetailCard } from "ui/components/CharacterDetailCard";
import { Container } from "@mui/material";
import { ListDetail } from "ui/components/ListDetail";

const CharacterDetail = () => {
  const { character, getData, participations, getParticipations } =
    useCharacterDetail();
  const route = useRouter();

  useEffect(() => {
    getData();
    getParticipations();
  }, []);

  return (
    <Container>
      <Title title="LISTA COMPLETA DE PERSONAGENS" />
      {character?.id ? (
        <CharacterDetailCard
          id={character.id}
          name={character.name}
          thumbnail={character.thumbnail}
          comics={character.comics}
          series={character.series}
          stories={character.stories}
          events={character.events}
          description={character.description}
        />
      ) : null}
      <ListDetail />
    </Container>
  );
};

export default CharacterDetail;
