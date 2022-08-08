import styled from "@emotion/styled";
import { Alert, CircularProgress, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import getNextRaces, { NextRaceApiData } from "../apis/getNextRaces";
import useFetch from "../hooks/useFetch";
import CategorySelect from "./CategorySelect";
import RaceCard from "./RaceCard";

interface NextRaceData extends NextRaceApiData {
  secondsLeft: number;
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
`;

const getSecondsDiff = (timeInSeconds: number) => {
  return timeInSeconds - DateTime.now().startOf("second").toSeconds();
};

const NextToGo = () => {
  const {
    data: apiNextRaces,
    loading: fetchLoading,
    error,
    fetch,
  } = useFetch(getNextRaces);
  const [loading, setLoading] = useState(true);
  const [nextRaces, setNextRaces] = useState<NextRaceData[]>([]);
  const [category, setCategory] = useState<string | null>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let processedNextRaces =
        apiNextRaces?.map((raceData) => ({
          ...raceData,
          secondsLeft: getSecondsDiff(raceData.startTimeInSeconds),
        })) || [];

      processedNextRaces = processedNextRaces.filter(
        (raceData) => raceData.secondsLeft > -61
      );

      if (processedNextRaces.length < 5) fetch();

      setNextRaces(processedNextRaces);
      setLoading(fetchLoading || false);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [apiNextRaces]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Next To Go
      </Typography>

      <CategorySelect onChange={setCategory} />

      <CardContainer>
        {loading ? (
          <CircularProgress />
        ) : nextRaces ? (
          nextRaces
            .filter((raceData) =>
              category ? raceData.catergoryId === category : true
            )
            .slice(0, 5)
            .map((raceData) => (
              <RaceCard
                raceNumber={raceData.raceNumber}
                meetingName={raceData.meetingName}
                secondsLeft={raceData.secondsLeft}
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
