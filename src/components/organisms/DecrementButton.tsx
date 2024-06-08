import React from 'react';
import { useCounter } from './CounterProvider';
import ButtonText from '../molecules/ButtonText';

const DecrementButton: React.FC = () => {
  const { decrement } = useCounter();
  return <ButtonText onClick={decrement} text="decrement" />;
};

export default DecrementButton;