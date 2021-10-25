import React, { useEffect } from "react";
import {
  AvengerContainer,
  CardListContainer,
  IndexContainer,
} from "@styles/page";
import { Stack, TablePagination } from "@mui/material";
import { useCharacter } from "data/hooks/useCharacter";
import { CharacterCard } from "ui/components/CharacterCard";
import { Title } from "ui/components/Title";
import { AVENGERS } from "data/mock/Avengers";
import { CharacterCardProps } from "data/@types/Character";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const {
    characters,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    count,
    getData,
  } = useCharacter();

  useEffect(() => {
    getData();
  }, [page, itemsPerPage]);

  const route = useRouter();

  const handleClick = (char: CharacterCardProps) => {
    route.push(`/characters/${char.id}`);
  };

  return (
    <IndexContainer>
      <AvengerContainer>
        <img src="/avengers.png" alt="Avengers" />
        <Title title="OS VINGADORES DAS TELONAS" />
        <CardListContainer>
          {AVENGERS.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              thumbnail={char.thumbnail}
              comics={char.comics}
              series={char.series}
              stories={char.stories}
              events={char.events}
              onClick={() => handleClick(char)}
            />
          ))}
        </CardListContainer>
      </AvengerContainer>

      <Title title="LISTA COMPLETA DE PERSONAGENS" />
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
            onClick={() => handleClick(char)}
          />
        ))}
      </CardListContainer>
      <Stack spacing={2}>
        <TablePagination
          sx={{ color: "secondary" }}
          component="div"
          count={count}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={(event) => {
            setPage(0);
            setItemsPerPage(Number(event.target.value));
          }}
          labelRowsPerPage="Characters per page"
        />
      </Stack>
    </IndexContainer>
  );
};

export default Home;
