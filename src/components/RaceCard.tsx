import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface Props {
  raceNumber: number;
  meetingName: string;
  secondsLeft: number;
}

const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  justify-content: space-between;
`;

const RaceCard = (props: Props) => {
  const { raceNumber, meetingName, secondsLeft } = props;

  return (
    <Card variant="outlined">
      <StyledCardActionArea>
        <CardContent>
          <Typography variant="subtitle1">Race No. {raceNumber}</Typography>
          <Typography variant="h5">{meetingName}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">{secondsLeft}s</Typography>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
};

export default RaceCard;
