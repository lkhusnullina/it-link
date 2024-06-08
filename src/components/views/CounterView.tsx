import React from 'react';
import { useCounter } from '../organisms/CounterProvider';
import Text from '../atoms/Text';
import IncrementButton from '../organisms/IncrementButton';
import DecrementButton from '../organisms/DecrementButton';
import styles from './CounterView.module.css'

const CounterView: React.FC = () => {
  const { index } = useCounter();
  return (
    <div className={styles.container}>
      <Text>{index}</Text>
      <IncrementButton />
      <DecrementButton />
    </div>
  );
};

export default CounterView;