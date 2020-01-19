import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { Requirements } from './components/Requirements';
import './App.scss';

export const App: React.FC = () => {
  
  const [calcName, setCalcName] = useState('Name of your calculator');

  const [calcState, setCalcState] = useState({
    counter: 0,
    input: ''
  });

  return (
    <div className='cont'>
        <Calculator calcName={calcName} calcState={calcState} setCalcState={setCalcState} />
        <Requirements calcName={calcName} setCalcName={setCalcName} calcState={calcState} setCalcState={setCalcState} />
    </div>
  );
};
