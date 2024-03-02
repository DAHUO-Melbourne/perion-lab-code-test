import axios from 'axios';

export interface GetUserSummaryDto {
  steamId: string;
}

export const requestGetUserSummary = async (
  params: GetUserSummaryDto,
) => {
  console.log(params);
  try {
    const response = await axios.get(`http://localhost:5000/users/getSummaryData/${params}`)
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};