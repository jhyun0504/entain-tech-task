import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import RaceCard from "./RaceCard";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
`;

const NextToGo = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Next To Go
      </Typography>

      <CardContainer>
        <RaceCard />
      </CardContainer>
    </div>
  );
};

export default NextToGo;
