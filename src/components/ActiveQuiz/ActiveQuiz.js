import React from 'react';
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
  return (
    <div className={'ActiveQuiz'}>
      <div className={'Question'}>
        <span>
          <strong>{props.questionNumber}.</strong>&nbsp;
          {props.question}
        </span>
        <small>{props.questionNumber} из {props.quizLenght}</small>
      </div>
      <div>
        <AnswersList
          state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </div>
    </div>
  )
}

export default ActiveQuiz