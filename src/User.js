import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function User({ teste }) {
  const [userCounter, setUserCounter] = useState(0);

  useEffect(() => {
    console.log('User mounted');

    return () => {
      console.log('User dismounted');
    };
  });

  console.log('user console geral');

  return (
    <div>
      {console.log('user console return')}
      <p>usuario</p>
      <p>{teste}</p>
      <button onClick={() => setUserCounter(userCounter + 1)}>contador usuario: {userCounter}</button>
    </div>
  );
}

export default User;
