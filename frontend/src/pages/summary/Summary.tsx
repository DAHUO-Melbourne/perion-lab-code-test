import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import { getSteamUserSummary } from '../../models/actions/summary';
import { GetUserSummaryDto } from '../../models/requests/summary';

interface stateType {
  steamId: string
}

interface SummaryProps {
  performGetSteamUserSummary: (p: GetUserSummaryDto) => void;
}

const Summary: React.FC<SummaryProps> = ({
  performGetSteamUserSummary,
}: SummaryProps) => {
  const location = useLocation<stateType>();
  const steamId = location.state.steamId;

  useEffect(() => {
    performGetSteamUserSummary({steamId: steamId})
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
  performGetSteamUserSummary: (params: GetUserSummaryDto) => {
    dispatch(getSteamUserSummary(params));
  },
});


export default connect(mapStateProps, mapDispatchToProps)(Summary);
