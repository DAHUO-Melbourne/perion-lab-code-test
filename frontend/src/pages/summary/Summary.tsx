import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';

interface stateType {
  steamId: string
}

const Summary: React.FC = () => {
  const location = useLocation<stateType>();
  const steamId = location.state.steamId;

  useEffect(() => {

  }, [steamId])

  return (
    <div className='page'>
      
    </div>
  );
}

export default Summary;
