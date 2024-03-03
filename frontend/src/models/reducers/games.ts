// @ts-ignore
import {handleActions} from 'redux-actions';
import {
  getSteamUserGamesListLoading,
  getSteamUserGamesListClear,
  getSteamUserGamesListSuccess,
  getSteamUserGamesListError,
  getSteamUserGamesListFail,
} from '../actions/games';
import { ACTION_STATUS } from '../states';

export interface GameProps {
  name: string;
  time: string;
}

export interface summaryProps {
  status: string;
  gamesList: GameProps[];
};

const defaultState: summaryProps = {
  status: ACTION_STATUS.clear,
  gamesList: [],
};


const reducer = handleActions({
  [getSteamUserGamesListLoading](state: any, {payload}: any) {
    return {
      ...state,
      status: ACTION_STATUS.loading,
    };
  },
  [getSteamUserGamesListSuccess](state: any, {payload}: any) {
    return {
      ...state,
      status: ACTION_STATUS.success,
      gamesList: payload,
    };
  },
  [getSteamUserGamesListError](state: any, {payload}: any) {
    return {
      ...state,
      status: ACTION_STATUS.error,
      gamesList: defaultState.gamesList,
    };
  },
  [getSteamUserGamesListClear](state: any, {payload}: any) {
    return {
      ...state,
      status: ACTION_STATUS.clear,
      gamesList: defaultState.gamesList,
    };
  },
  [getSteamUserGamesListFail](state: any, {payload}: any) {
    return {
      ...state,
      status: ACTION_STATUS.fail,
      gamesList: defaultState.gamesList,
    };
  },
}, defaultState);

export default reducer;

