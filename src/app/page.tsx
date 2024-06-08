'use client'

import React from 'react';
import { CounterProvider } from '../components/organisms/CounterProvider';
import CounterView from '../components/views/CounterView';
import "./page.module.css";

const App: React.FC = () => {
  return (
    <CounterProvider>
      <CounterView />
    </CounterProvider>
  );
};

export default App;
