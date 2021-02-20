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
        <p>Результаты теста</p>
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
                <li
                  key={index}
                >
                  <i className={iconClasses.join(' ')}/>
                  <strong>{index + 1}</strong>. &nbsp;
                  {quizItem.question}
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
          onClick={props.onSelectQuiz}
        >
          Новый тест
        </Button>
      </div>
    </div>
  )
}

export default FinishedQuiz