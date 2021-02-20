import React from 'react';
import './FinishedQuiz.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = (props) => {

  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={'FinishedQuiz'}>
      <div className={'Results_header'}>
        <p>Results</p>
      </div>
      <div className={'Results'}>
        <ul>
          {
            props.quiz.map((quizItem, index) => {
              const iconClasses = [
                'fa',
                props.results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times',
                props.results[quizItem.id]
              ]
              return (
                <li key={index}>
                  <strong>{index + 1}</strong>. &nbsp;
                  {quizItem.question}
                  <i className={iconClasses.join(' ')}/>
                </li>
              )
            })
          }
        </ul>
      </div>

      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div className={'Buttons'}>
        <Button
          type={'primary'}
          icon={'fa-redo-alt'}
          onClick={props.onRetry}
        >
          Повторить
        </Button>
        <Button
          type={'done'}
          icon={'fa-comment-dots'}
        >
          Новый тест
        </Button>
      </div>
    </div>
  )
}

export default FinishedQuiz