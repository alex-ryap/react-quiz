import React from 'react';
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      activeQuestion: 0,
      isFinished: true,
      answerState: null,
      quiz: [
        {
          question: 'Какой сегодня год?',
          rightAnswerId: 2,
          id: 1,
          answers: [
            {text: '2020', id: 1},
            {text: '2021', id: 2},
            {text: '2022', id: 3},
            {text: '2007', id: 4}
          ]
        },
        {
          question: 'В каком году основали Санкт-Петербург?',
          rightAnswerId: 3,
          id: 2,
          answers: [
            {text: '1700', id: 1},
            {text: '1709', id: 2},
            {text: '1703', id: 3},
            {text: '1721', id: 4}
          ]
        }
      ]
    }
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: { [answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results
      })

      const errorAnswerTimeout = window.setTimeout(() => {
        this.setState({
          answerState: null
        })

        window.clearTimeout(errorAnswerTimeout)
      }, 500)
    }
  }

  onRetryHandler = () => {
    this.setState({
      activeQuestion: 0,
      results: {},
      isFinished: false,
      answerState: null
    })
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={'Quiz'}>
        <div className={'QuizWrapper'}>
          <h1>Тест</h1>
          { this.state.isFinished
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.onRetryHandler}
              />
            : <ActiveQuiz
                question={this.state.quiz[this.state.activeQuestion].question}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                onAnswerClick={this.onAnswerClickHandler}
                quizLenght={this.state.quiz.length}
                questionNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

export default Quiz