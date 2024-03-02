// @ts-ignore
import {handleActions} from 'redux-actions';
import {
  getSteamUserSummaryLoading,
  getSteamUserSummaryClear,
  getSteamUserSummarySuccess,
  getSteamUserSummaryError,
  getSteamUserSummaryFail,
} from '../actions/summary';

export interface mostPlayedGameProps {
  appid: number,
  name: string,
  playtime_forever: number,
  img_icon_url: string,
  has_community_visible_stats: boolean,
  playtime_windows_forever: number,
  playtime_mac_forever: number,
  playtime_linux_forever: number,
  rtime_last_played: number,
  playtime_disconnected: number
}

export interface summaryProps {
  gamesCount: number,
  mostPlayedGame: mostPlayedGameProps,
  totalPlaytime: number,
};

const defaultState: summaryProps = {
  gamesCount: 0,
  mostPlayedGame: {
    appid: 0,
    name: "",
    playtime_forever: 0,
    img_icon_url: "",
    has_community_visible_stats: false,
    playtime_windows_forever: 0,
    playtime_mac_forever: 0,
    playtime_linux_forever: 0,
    rtime_last_played: 0,
    playtime_disconnected: 0
  },
  totalPlaytime: 0,
};


const reducer = handleActions({
  [getSteamUserSummarySuccess](state: any, {payload}: any) {
    return {
      ...state,
      gamesCount: payload.gamesCount,
      mostPlayedGame: payload.mostPlayedGame,
      totalPlaytime: payload.totalPlaytime
    };
  },

}, defaultState);

export default reducer;

