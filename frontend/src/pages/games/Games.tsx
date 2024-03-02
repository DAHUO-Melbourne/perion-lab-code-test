import React, {useEffect, useState} from 'react';
import Thumbnail from '../../components/thumbnail';
import SteamIcon from '../../assets/icons/steam-icon.jpeg';
import {useLocation} from 'react-router-dom';
import { stateType } from '../summary/Summary';
import {connect} from 'react-redux';
import { getSteamUserGamesList } from '../../models/actions/games';
import { GetUserGamesListDto } from '../../models/requests/games';
import { GameProps } from '../../models/reducers/games';
import GameCard from '../../components/gameCard';
import { ACTION_STATUS } from '../../models/states';

interface GamesProps {
  status: string,
  gamesList: GameProps[];
  performGetSteamUserGamesList: (p: GetUserGamesListDto) => void;
}

const Games: React.FC<GamesProps> = ({
  status,
  gamesList,
  performGetSteamUserGamesList
}: GamesProps) => {
  const location = useLocation<stateType>();
  const steamId = location.state.steamId;
  const [checkUnPlayedGames, setCheckUnPlayedGames] = useState<boolean>(false);

  useEffect(() => {
    performGetSteamUserGamesList({steamId: steamId})
  }, [performGetSteamUserGamesList, steamId])

  return (
    <div className='page'>
      <Thumbnail src={SteamIcon} />
      <h1 className='heading'>Full Games List</h1>
      <input
        type='checkbox'
        aria-label='filter-unplayed-games'
        onChange={() => setCheckUnPlayedGames((value) => !value)}
      />
      {status === ACTION_STATUS.loading && (
        <h3 className='heading'>LOADING...</h3>
      )}
      {status === ACTION_STATUS.error && (
        <h3 className='heading'>Server has some errors now, please retry later</h3>
      )}
      {status === ACTION_STATUS.fail && (
        <h3 className='heading'>Loading Failed, please retry later</h3>
      )}
      {status === ACTION_STATUS.success && gamesList.map((game: GameProps) => (
        <GameCard
          name={game.name}
          playTime={game.time}
        />
      ))}
    </div>
  );
}

const mapStateProps = (state: any) => {
  return {
    status: state.games?.status,
    gamesList: state.games?.gamesList,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  performGetSteamUserGamesList: (params: GetUserGamesListDto) => {
    dispatch(getSteamUserGamesList(params));
  },
});

export default connect(mapStateProps, mapDispatchToProps)(Games);
