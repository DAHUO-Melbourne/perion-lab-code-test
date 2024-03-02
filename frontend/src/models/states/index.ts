export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const ERROR = 'ERROR';

export const CREATE = 'CREATE';
export const INTERVAL = 'INTERVAL';
export const CLEAR = 'CLEAR';

export const PUSH = 'PUSH';
export const POP = 'POP';
export const DELETE = 'DELETE';

export const SET = 'SET';
export const UPDATE = 'UPDATE';

export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export const LOADING = 'LOADING';
export const FETCH = 'FETCH';

export const ACTION_STATUS = {
  success: SUCCESS,
  fail: FAIL,
  error: ERROR,
  loading: LOADING,
  clear: CLEAR,
};

export const GET_STEAM_USER_SUMMARY_ACTIONS = [SUCCESS, FAIL, ERROR, LOADING, CLEAR];
export const GET_STEAM_USER_GAMES_LIST_ACTIONS = [SUCCESS, FAIL, ERROR, LOADING, CLEAR];