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
import { useEvent } from "data/hooks/useEvent";

const Events = () => {
  const {
    events,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    count,
    getData,
  } = useEvent();

  useEffect(() => {
    getData();
  }, [page, itemsPerPage]);

  const route = useRouter();

  const handleClick = (eventId: number) => {
    route.push(`/events/${eventId}`);
  };

  return (
    <IndexContainer>
      <Title title="ALL EVENTS" />
      <CardListContainer>
        {events.length ? (
          events.map((event) => (
            <ParticipationCard
              key={event.id}
              id={event.id}
              title={event.title}
              thumbnail={event.thumbnail}
              onClick={() => handleClick(event.id)}
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
          labelRowsPerPage="Events per page"
        />
      </Stack>
    </IndexContainer>
  );
};

export default Events;
