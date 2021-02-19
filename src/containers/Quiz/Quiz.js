import React from 'react';
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
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

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: { [answerId]: 'error' }
      })

      const errorAnswerTimeout = window.setTimeout(() => {
        this.setState({
          answerState: null
        })

        window.clearTimeout(errorAnswerTimeout)
      }, 1000)
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={'Quiz'}>
        <div className={'QuizWrapper'}>
          <h1>Quiz</h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            questionNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz