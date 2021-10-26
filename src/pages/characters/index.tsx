import React, { useEffect } from "react";
import {
  AvengerContainer,
  CardListContainer,
  IndexContainer,
} from "@styles/page";
import {
  CircularProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import { useCharacter } from "data/hooks/useCharacter";
import { CharacterCard } from "ui/components/CharacterCard";
import { Title } from "ui/components/Title";
import { AVENGERS } from "data/mock/Avengers";
import { CharacterCardProps } from "data/@types/Character";
import { useRouter } from "next/dist/client/router";

const Characters = () => {
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
        <img src="/avengers.jpg" alt="Avengers" />
        <Title style={{ color: "#000" }} title="THE AVENGERS OF THE CINEMAS" />
        <CardListContainer>
          {AVENGERS.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              thumbnail={char.thumbnail}
              comics={char.comics}
              series={char.series}
              events={char.events}
              onClick={() => handleClick(char)}
            />
          ))}
        </CardListContainer>
      </AvengerContainer>

      <Title title="ALL CHARACTERS" />
      <CardListContainer>
        {characters ? (
          characters.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              thumbnail={char.thumbnail}
              comics={char.comics}
              series={char.series}
              events={char.events}
              onClick={() => handleClick(char)}
            />
          ))
        ) : (
          <Typography align="center" sx={{ my: 10 }}>
            <CircularProgress color="secondary" />
          </Typography>
        )}
      </CardListContainer>
      <Stack spacing={2}>
        <TablePagination
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

export default Characters;
