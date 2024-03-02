import React, {useEffect} from 'react';
import Thumbnail from '../../components/thumbnail';
import SteamIcon from '../../assets/icons/steam-icon.jpeg';
import {useLocation} from 'react-router-dom';
import { stateType } from '../summary/Summary';
import {connect} from 'react-redux';
import { getSteamUserGamesList } from '../../models/actions/games';
import { GetUserGamesListDto } from '../../models/requests/games';

interface GamesProps {
  performGetSteamUserGamesList: (p: GetUserGamesListDto) => void;
}

const Games: React.FC<GamesProps> = ({
  performGetSteamUserGamesList
}: GamesProps) => {
  const location = useLocation<stateType>();
  const steamId = location.state.steamId;

  useEffect(() => {
    performGetSteamUserGamesList({steamId: steamId})
  }, [performGetSteamUserGamesList, steamId])

  return (
    <div className='page'>
      <Thumbnail src={SteamIcon} />
      <h1 className='heading'>Full Games List</h1>
    </div>
  );
}

const mapStateProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  performGetSteamUserGamesList: (params: GetUserGamesListDto) => {
    dispatch(getSteamUserGamesList(params));
  },
});

export default connect(mapStateProps, mapDispatchToProps)(Games);
