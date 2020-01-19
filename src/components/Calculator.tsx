import React from 'react';
import { CalcButton } from './Button';
import '../App.scss';

interface CalcProps {
  calcName: string;
  calcState: {
    counter: number;
    input: string;
  };
  setCalcState: React.Dispatch<React.SetStateAction<{
    counter: number;
    input: string;
  }>>;
};

const characters = ['=', 'C', '*', '/', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', ''];

export const Calculator: React.FC<CalcProps> = ({ calcName, calcState, setCalcState }) => {
  return (
    <div className='calculator-wrapper'>
      <h2 className='calculator-title'>{calcName}</h2>
      <div className='calculator'>
        <div className='calculator-input'>
          <h3 className='result-small'>{calcState.input}</h3>
        </div>
        <div className='result'>
          <h1>{calcState.counter}</h1>
        </div>
        {characters.map((char, i) => <CalcButton key={i} calcState={calcState} setCalcState={setCalcState} char={char}>{char}</CalcButton>)}
      </div>
    </div>
  );
};
