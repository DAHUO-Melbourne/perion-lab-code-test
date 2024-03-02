import axios from 'axios';

export interface GetUserGamesListDto {
  steamId: string;
}

export const requestGetSteamUserGamesList = async (
  params: GetUserGamesListDto,
) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${params.steamId}`)
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};