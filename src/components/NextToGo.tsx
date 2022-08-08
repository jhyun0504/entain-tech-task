import styled from "@emotion/styled";
import { Alert, CircularProgress, Typography } from "@mui/material";
import getNextRaces from "../apis/getNextRaces";
import useFetch from "../hooks/useFetch";
import RaceCard from "./RaceCard";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
`;

const NextToGo = () => {
  const { data: nextRaces, loading, error } = useFetch(getNextRaces);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Next To Go
      </Typography>

      <CardContainer>
        {loading ? (
          <CircularProgress />
        ) : nextRaces ? (
          nextRaces.map((raceData) => (
            <RaceCard
              raceNumber={raceData.raceNumber}
              meetingName={raceData.meetingName}
              secondsLeft={5}
              key={raceData.raceId}
            />
          ))
        ) : (
          <Alert severity="error">{error}</Alert>
        )}
      </CardContainer>
    </div>
  );
};

export default NextToGo;
