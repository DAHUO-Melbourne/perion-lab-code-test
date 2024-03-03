import axios from 'axios';
import { baseUrl } from './constants';

export interface GetUserGamesListDto {
  steamId: string;
}

export const requestGetSteamUserGamesList = async (
  params: GetUserGamesListDto,
) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${params.steamId}`)
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};