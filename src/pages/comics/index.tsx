import React, { useEffect } from "react";
import { CardListContainer, IndexContainer } from "@styles/page";
import {
  CircularProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import { Title } from "ui/components/Title";
import { useRouter } from "next/dist/client/router";
import { ParticipationCard } from "ui/components/PaticipationCard";
import { useComic } from "data/hooks/useComic";

const Comics = () => {
  const {
    comics,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    count,
    getData,
  } = useComic();

  useEffect(() => {
    getData();
  }, [page, itemsPerPage]);

  const route = useRouter();

  const handleClick = (comicId: number) => {
    route.push(`/comics/${comicId}`);
  };

  return (
    <IndexContainer>
      <Title title="ALL COMICS" />
      <CardListContainer>
        {comics.length ? (
          comics.map((comic) => (
            <ParticipationCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              thumbnail={comic.thumbnail}
              onClick={() => handleClick(comic.id)}
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
          labelRowsPerPage="Comics per page"
        />
      </Stack>
    </IndexContainer>
  );
};

export default Comics;
