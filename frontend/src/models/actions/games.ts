// @ts-ignore
import {createAction} from 'redux-actions';
import {GET_STEAM_USER_GAMES_LIST} from '../actionTypes';


export const getSteamUserGamesList = createAction(GET_STEAM_USER_GAMES_LIST.ACTION);
export const getSteamUserGamesListSuccess = createAction(GET_STEAM_USER_GAMES_LIST.SUCCESS);
export const getSteamUserGamesListLoading = createAction(GET_STEAM_USER_GAMES_LIST.LOADING);
export const getSteamUserGamesListFail = createAction(GET_STEAM_USER_GAMES_LIST.FAIL);
export const getSteamUserGamesListClear = createAction(GET_STEAM_USER_GAMES_LIST.ERROR);
export const getSteamUserGamesListError = createAction(GET_STEAM_USER_GAMES_LIST.ERROR);
