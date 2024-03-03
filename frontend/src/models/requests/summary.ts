import axios from 'axios';
import { baseUrl } from './constants';

export interface GetUserSummaryDto {
  steamId: string;
}

export const requestGetUserSummary = async (
  params: GetUserSummaryDto,
) => {
  try {
    const response = await axios.get(`${baseUrl}/users/getSummaryData/${params.steamId}`)
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};