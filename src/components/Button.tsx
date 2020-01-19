import React from 'react';
import { evaluate } from 'mathjs';

interface CalcButtonProps {
  char: string;
  calcState: {
    counter: number;
    input: string;
  };
  setCalcState: React.Dispatch<React.SetStateAction<{
    counter: number;
    input: string;
  }>>;
};

export const CalcButton: React.FC<CalcButtonProps> = ({ children, char, calcState, setCalcState }) => {

  const addToInput = () => {
    switch(char) {
      case '=':
          let x = Number(char);
          console.log(isNaN(x))
          if(isNaN(x) && calcState.input.length < 2) {
            break;
          } else {
            setCalcState({
              ...calcState,
              counter: evaluate(calcState.input)
             }); 
          }
          break;
      case 'C':
        setCalcState({
            ...calcState,
            counter: 0,
            input: ''
        });
        break;
      default:
            setCalcState({
              ...calcState,
              input: calcState.input.concat(char)
            });
    };
  };

  return (
    <div className='calc-button' onClick={addToInput}>
      {children}
    </div>
  );
};
