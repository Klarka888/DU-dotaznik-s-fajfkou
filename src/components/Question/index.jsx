import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

export const Question = ({text}) => {
  const [iconType, setIconType] = useState('symbolQuestion') 
  const [answered, setAnswered] = useState(false) //3. tady je nový stav, defaultně false¨

  const handleOnClickType = (type, text) => {     //1. museli jsme přidat text do props 
    setIconType(type)
    console.log(text)     //2. i tady, aby se vypal do konzole
    setAnswered(true)     //5. nastavení answered
  }

  

  return (
    <div className="question">
      <QuestionBody 
        iconType={answered? 'symbolTick' : iconType} 
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onClickType={handleOnClickType}/>  
        <Option type="smileyYes" text="Spíše souhlasím" onClickType={handleOnClickType}/>
        <Option type="smileyNeutral" text="Nevím" onClickType={handleOnClickType}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" onClickType={handleOnClickType}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" onClickType={handleOnClickType}/>
      </div>
    </div>
  );
};
