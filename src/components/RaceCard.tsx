import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  justify-content: space-between;
`;

const RaceCard = () => {
  return (
    <Card variant="outlined">
      <StyledCardActionArea>
        <CardContent>
          <Typography variant="h6">Race No. 3</Typography>
          <Typography variant="h6">Hello</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5">100s</Typography>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
};

export default RaceCard;
