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
import { useSerie } from "data/hooks/useSerie";

const Series = () => {
  const {
    series,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    count,
    getData,
  } = useSerie();

  useEffect(() => {
    getData();
  }, [page, itemsPerPage]);

  const route = useRouter();

  const handleClick = (serieId: number) => {
    route.push(`/series/${serieId}`);
  };

  return (
    <IndexContainer>
      <Title title="ALL SERIES" />
      <CardListContainer>
        {series.length ? (
          series.map((serie) => (
            <ParticipationCard
              key={serie.id}
              id={serie.id}
              title={serie.title}
              thumbnail={serie.thumbnail}
              onClick={() => handleClick(serie.id)}
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
          onPageChange={(serie, newPage) => setPage(newPage)}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={(serie) => {
            setPage(0);
            setItemsPerPage(Number(serie.target.value));
          }}
          labelRowsPerPage="Series per page"
        />
      </Stack>
    </IndexContainer>
  );
};

export default Series;
