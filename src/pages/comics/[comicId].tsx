import React, { useEffect } from "react";
import { Title } from "ui/components/Title";
import { CircularProgress, Container, Typography } from "@mui/material";
import { ComicDetailCard } from "ui/components/ComicDetailCard";
import { useComicDetail } from "data/hooks/useComicDetail";

const ComicDetail = () => {
  const { comic, getData } = useComicDetail();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Title title="COMIC DETAILS" />
      {comic.id ? (
        <ComicDetailCard
          id={comic.id}
          title={comic.title}
          thumbnail={comic.thumbnail}
          description={comic.description}
          creators={comic.creators}
          characters={comic.characters}
          prices={comic.prices}
          pageCount={comic.pageCount}
        />
      ) : (
        <Typography align="center" sx={{ my: 10 }}>
          <CircularProgress color="secondary" />
        </Typography>
      )}
    </Container>
  );
};

export default ComicDetail;
