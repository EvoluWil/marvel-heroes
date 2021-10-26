import React, { useEffect } from "react";
import {
  CircularProgress,
  Container,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import { useRouter } from "next/dist/client/router";

import { CardListContainer } from "@styles/page";
import { useCharacterDetail } from "data/hooks/useCharacterDetails";
import { Title } from "ui/components/Title";
import { CharacterDetailCard } from "ui/components/CharacterDetailCard";
import { ParticipationCard } from "ui/components/PaticipationCard";
import { NavDetail } from "ui/components/NavDetails";

const CharacterDetail = () => {
  const {
    character,
    getData,
    participations,
    getParticipations,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    count,
  } = useCharacterDetail();
  const [valueView, setValueView] = React.useState("comics");

  const route = useRouter();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getParticipations(valueView);
  }, [page, itemsPerPage]);

  const handleClick = (fullUrl) => {
    const [, url] = fullUrl.split("public");
    route.push(`${url}`);
  };

  return (
    <Container>
      <Title title="CHARACTER DETAILS" />
      {character?.id ? (
        <CharacterDetailCard
          id={character.id}
          name={character.name}
          thumbnail={character.thumbnail}
          comics={character.comics}
          series={character.series}
          events={character.events}
          description={character.description}
        />
      ) : (
        <Typography align="center" sx={{ my: 10 }}>
          <CircularProgress color="secondary" />
        </Typography>
      )}
      <NavDetail
        value={valueView}
        setValue={(event, newValue) => {
          getParticipations(newValue);
          setValueView(newValue);
        }}
      />
      <CardListContainer>
        {participations.map((participation) => (
          <ParticipationCard
            key={participation.id}
            id={participation.id}
            title={participation.title}
            thumbnail={participation.thumbnail}
            onClick={() => handleClick(participation.resourceURI)}
          />
        ))}
      </CardListContainer>
      <Stack spacing={2}>
        <TablePagination
          sx={{ color: "secondary" }}
          component="div"
          count={count}
          page={page}
          onPageChange={(event, newPage) => {
            setPage(newPage);
          }}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={(event) => {
            setItemsPerPage(Number(event.target.value));
          }}
          labelRowsPerPage="Characters per page"
        />
      </Stack>
    </Container>
  );
};

export default CharacterDetail;
