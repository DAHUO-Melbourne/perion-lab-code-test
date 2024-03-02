import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSteamUserSummary } from '../../models/actions/summary';

interface stateType {
  steamId: string
}

interface SummaryProps {
  performGetSteamUserSummary: (p: string) => void;
}

const Summary: React.FC<SummaryProps> = ({
  performGetSteamUserSummary,
}: SummaryProps) => {
  const location = useLocation<stateType>();
  const steamId = location.state.steamId;

  useEffect(() => {
    performGetSteamUserSummary(steamId)
  }, [performGetSteamUserSummary, steamId])

  return (
    <div className='page'>
      
    </div>
  );
}

const mapStateProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  performGetSteamUserSummary: (params: string) => {
    dispatch(getSteamUserSummary(params));
  },
});


export default connect(mapStateProps, mapDispatchToProps)(Summary);
