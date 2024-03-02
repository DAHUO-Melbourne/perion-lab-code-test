import {combineReducers} from 'redux';
import summary from './summary';
import games from './games';

export default combineReducers({
  summary,
  games
});