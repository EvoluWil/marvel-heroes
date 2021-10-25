import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Container404 } from "@styles/page/404";
import { Title } from "ui/components/Title";

const NotFound404 = () => {
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        setEffect(true);
        setTimeout(() => {
          setEffect(false);
        }, 400);
      }, 200);
    }, 3000);
  }, []);

  return (
    <Container>
      <Container404>
        <Title
          title="404 PAGE NOT FOUND"
          subtitle="Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific."
        />
        <div>
          <img
            src="404.png"
            style={{
              width: effect ? "254px" : "250px",
              transition: "width 0.4s",
            }}
            alt="Page Not found"
          />
        </div>
      </Container404>
    </Container>
  );
};

export default NotFound404;
