// @ts-ignore
import {createAction} from 'redux-actions';
import {GET_STEAM_USER_SUMMARY} from '../actionTypes';


export const getSteamUserSummary = createAction(GET_STEAM_USER_SUMMARY.ACTION);
export const getSteamUserSummarySuccess = createAction(GET_STEAM_USER_SUMMARY.SUCCESS);
export const getSteamUserSummaryLoading = createAction(GET_STEAM_USER_SUMMARY.LOADING);
export const getSteamUserSummaryFail = createAction(GET_STEAM_USER_SUMMARY.FAIL);
export const getSteamUserSummaryClear = createAction(GET_STEAM_USER_SUMMARY.ERROR);
export const getSteamUserSummaryError = createAction(GET_STEAM_USER_SUMMARY.ERROR);
