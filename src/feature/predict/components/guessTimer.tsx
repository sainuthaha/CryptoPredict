import { useState, useEffect } from 'react';
import { Text } from '@fluentui/react';

export const GuessTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Text variant="large">{seconds}</Text>
  );
};
  
