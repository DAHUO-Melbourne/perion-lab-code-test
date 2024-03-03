import React, { useEffect } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSteamUserSummary } from '../../models/actions/summary';
import { GetUserSummaryDto } from '../../models/requests/summary';
import { mostPlayedGameProps } from '../../models/reducers/summary';
import Thumbnail from '../../components/thumbnail';
import SteamIcon from '../../assets/icons/steam-icon.jpeg';
import { ACTION_STATUS } from '../../models/states';
import Button from '../../components/button';

export interface stateType {
  steamId: string
}

interface SummaryProps {
  status: string,
  gamesCount: number,
  mostPlayedGame: mostPlayedGameProps,
  totalPlaytime: number,
  performGetSteamUserSummary: (p: GetUserSummaryDto) => void;
}

const Summary: React.FC<SummaryProps> = ({
  status,
  gamesCount,
  mostPlayedGame,
  totalPlaytime,
  performGetSteamUserSummary,
}: SummaryProps) => {
  const history = useHistory();
  const location = useLocation<stateType>();
  const steamId = location.state.steamId;

  useEffect(() => {
    performGetSteamUserSummary({steamId: steamId})
  }, [performGetSteamUserSummary, steamId])

  return (
    <div className='page'>
      <Thumbnail src={SteamIcon} />
      <h1 className='heading'>Steam Account Summary</h1>
      <h3 className='heading'>SteamId: {steamId}</h3>
      {status === ACTION_STATUS.fail && (
        <h3 className='heading'>Loading Failed, please retry later</h3>
      )}
      {status === ACTION_STATUS.error && (
        <h3 className='heading'>Server has some errors now, please retry later</h3>
      )}
      {status === ACTION_STATUS.loading && (
        <h3 className='heading'>LOADING...</h3>
      )}
      {status === ACTION_STATUS.success && (
        <>
          <h3 className='heading'>Owned Total Games Count: {gamesCount}</h3>
          <h3 className='heading'>Most Played Game: {mostPlayedGame.name}</h3>
          <h3 className='heading'>Total Played Time: {totalPlaytime} hours</h3>
        </>
      )}
      <Button
        onClick={() => 
          history.push({
            pathname: '/games',
            state: {steamId}
          })
        }
      >
        View Full Games List
      </Button>
    </div>
  );
}

const mapStateProps = (state: any) => {
  return {
    status: state.summary?.status,
    gamesCount: state.summary?.gamesCount,
    mostPlayedGame: state.summary?.mostPlayedGame,
    totalPlaytime: state.summary?.totalPlaytime
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  performGetSteamUserSummary: (params: GetUserSummaryDto) => {
    dispatch(getSteamUserSummary(params));
  },
});

export default connect(mapStateProps, mapDispatchToProps)(Summary);
