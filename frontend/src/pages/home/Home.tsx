import React, { useState } from 'react';
import Input from '../../components/input';
import SteamIcon from '../../assets/icons/steam-icon.jpeg';
import Thumbnail from '../../components/thumbnail';

const Home: React.FC = () => {
  const [steamId, setSteamId] = useState<string>('')
  return (
    <div className='page'>
      <Thumbnail src={SteamIcon} />
      <h1 className='heading'>Welcome to Steam Game Library  Analyser</h1>
      <h3 className='heading'>Please input your steamId</h3>
      <Input value={steamId} setValue={setSteamId} onSubmit={() => {}}/>
    </div>
  );
}

export default Home;
