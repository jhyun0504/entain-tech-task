import axios from "axios";

interface RawRaceSummary {
  race_id: string;
  meeting_name: string;
  race_number: number;
  category_id: string;
  advertised_start: {
    seconds: number;
  };
}

interface RawNextRaceData {
  next_to_go_ids: string[];
  race_summaries: { [raceId: string]: RawRaceSummary };
}

export interface NextRaceApiData {
  raceId: string;
  meetingName: string;
  raceNumber: number;
  catergoryId: string;
  startTime: number;
}

const getNextRaces = async (
  nextRaceCount: number = 10
): Promise<NextRaceApiData[]> => {
  const response = await axios.get<{ data: RawNextRaceData }>(
    `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=${nextRaceCount}`
  );

  // Object into an array and into a correct format
  const nextRaces = Object.values(
    response.data.data.race_summaries
  ).map<NextRaceApiData>((raceSummary) => ({
    raceId: raceSummary.race_id,
    meetingName: raceSummary.meeting_name,
    raceNumber: raceSummary.race_number,
    catergoryId: raceSummary.category_id,
    startTime: raceSummary.advertised_start.seconds,
  }));

  // Sort it to make sure start time is ascending
  return nextRaces.sort((a, b) => a.startTime - b.startTime);
};

export default getNextRaces;
