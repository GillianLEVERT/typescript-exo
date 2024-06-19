// App.tsx
import React from 'react';
import {Counter} from './Counter';
import {ProfileCard} from './ProfileCard';

export const App: React.FC = () => {
  const userAttributes = {
    strength: 22,
    dexterity: 8,
    intelligence: 7
  };

  return (
    <div className='bg-[#123] text-white h-screen'>
      <h1>My App</h1>
      <Counter initialValue={0} />
      <ProfileCard
        name="John Doe"
        age={30}
        isActive={true}
        attributes={userAttributes}
      />
    </div>
  );
};
