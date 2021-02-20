import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => {
  return (
      <ul className={'AnswersList'}>
      { props.answers.map((answer, index) => {
          return (
            <AnswerItem
              key={index}
              answer={answer}
              state={props.state ? props.state[answer.id] : null}
              onAnswerClick={props.onAnswerClick}
            />
          )
        })
      }
    </ul>
  )
}

export default AnswersList