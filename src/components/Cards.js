import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Stack } from "react-bootstrap";

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://6212ee07f43692c9c6f564f5.mockapi.io/api/v1/cards")
      .then((result) => {
        setCards(result.data);
        setLoading(false);
      });
  }, []);

  return (
    <Stack className="cards" direction="horizontal" gap={4}>
      {cards.map((card) => (
        <Card
          companyLogo={card.companyLogo}
          avatars={card.avatars}
          progress={card.progress}
          color={card.color}
        />
      ))}
    </Stack>
  );
}

export default Cards;
