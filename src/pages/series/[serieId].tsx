import React, { useEffect } from "react";
import { Title } from "ui/components/Title";
import { CircularProgress, Container, Typography } from "@mui/material";
import { SerieDetailCard } from "ui/components/SerieDetailCard";
import { useSerieDetail } from "data/hooks/useSerieDetail";

const SerieDetail = () => {
  const { serie, getData } = useSerieDetail();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Title title="SERIE DETAILS" />
      {serie?.id ? (
        <SerieDetailCard
          id={serie.id}
          title={serie.title}
          thumbnail={serie.thumbnail}
          description={serie.description}
          creators={serie.creators}
          characters={serie.characters}
        />
      ) : (
        <Typography align="center" sx={{ my: 10 }}>
          <CircularProgress color="secondary" />
        </Typography>
      )}
    </Container>
  );
};

export default SerieDetail;
