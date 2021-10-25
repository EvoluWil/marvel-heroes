import { Stack, TablePagination, Typography } from "@mui/material";
import { CardListContainer } from "@styles/page";
import { CharacterCardProps } from "data/@types/Character";
import { useCharacterDetail } from "data/hooks/useCharacterDetails";
import React, { useEffect } from "react";
import { NavDetail } from "../NavDetails";
import { Title } from "../Title";
import { CardContainer, HeroImage, HeroName, StatsContainer } from "./style";

export const ListDetail = () => {
  const { participations, getParticipations } = useCharacterDetail();
  console.log(participations);

  useEffect(() => {
    getParticipations();
  }, []);

  return (
    <>
      <NavDetail />
      <CardListContainer>
        {participations.map((participation) => (
          <div>{participation.title}</div>
        ))}
      </CardListContainer>
      <Stack spacing={2}>
        <TablePagination
          sx={{ color: "secondary" }}
          component="div"
          count={10}
          page={0}
          onPageChange={(event, newPage) => {}}
          rowsPerPage={0}
          onRowsPerPageChange={(event) => {}}
          labelRowsPerPage="Characters per page"
        />
      </Stack>
    </>
  );
};
