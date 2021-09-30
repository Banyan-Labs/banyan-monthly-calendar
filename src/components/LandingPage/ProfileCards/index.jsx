import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { Container } from "./style";
import axios from "axios";

const ProfileCards = () => {
  const url = "https://banyan-cmc-backend.herokuapp.com/api/month";
  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "long",
    })
  );
  const apiGetProfileCardData = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.data) {
          setCardsToDisplay(res.data.filter((card) => card.month === currentMonth)[0]["introductions"]);
        }
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    apiGetProfileCardData();
  }, []);

  return (
    <Container>
      {cardsToDisplay &&
        cardsToDisplay
          .map((data, index) => (
            <ProfileCard
              img={data.introImage}
              name={data.name}
              text={data.introDescription}
              key={index}
            />
          ))}
    </Container>
  );
};

export default ProfileCards;
