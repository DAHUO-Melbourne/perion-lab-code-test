import React, { useState } from 'react';
import Input from '../../components/input';

const Home: React.FC = () => {
  const [steamId, setSteamId] = useState<string>('')
  return (
    <div className='page'>
      <h1 className='heading'>Welcome to Steam Game Library  Analyser</h1>
      <Input value={steamId} setValue={setSteamId}/>
    </div>
  );
}

export default Home;
