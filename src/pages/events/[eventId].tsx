import React, { useEffect } from "react";
import { Title } from "ui/components/Title";
import { CircularProgress, Container, Typography } from "@mui/material";
import { EventDetailCard } from "ui/components/EventDetailCard";
import { useEventDetail } from "data/hooks/useEventDetail";

const EventDetail = () => {
  const { event, getData } = useEventDetail();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Title title="EVENT DETAILS" />
      {event?.id ? (
        <EventDetailCard
          id={event.id}
          title={event.title}
          thumbnail={event.thumbnail}
          description={event.description}
          creators={event.creators}
          characters={event.characters}
        />
      ) : (
        <Typography align="center" sx={{ my: 10 }}>
          <CircularProgress color="secondary" />
        </Typography>
      )}
    </Container>
  );
};

export default EventDetail;
