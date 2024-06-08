import React, { createContext, useContext, useState, ReactNode } from 'react';

type CounterContextType = {
  index: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  
  const [index, setIndex] = useState(0);
  
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <CounterContext.Provider value={{ index, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};