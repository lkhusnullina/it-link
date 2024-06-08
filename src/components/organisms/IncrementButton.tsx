import React from 'react';
import { useCounter } from './CounterProvider';
import ButtonText from '../molecules/ButtonText';

const IncrementButton: React.FC = () => {
  const { increment } = useCounter();
  return <ButtonText onClick={increment} text="increment" />;
};

export default IncrementButton;