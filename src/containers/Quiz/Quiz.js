import React from 'react';
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      activeQuestion: 0,
      isFinished: false,
      answerState: null,
      quiz: null
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

  componentDidMount() {
    this.setState({
      quiz: this.props.quiz
    })
  }

  render() {

    if (this.state.quiz) {
      return (
        <div className={'Quiz'}>
          <div className={'QuizWrapper'}>
            <h1>Тест по теме "{this.props.theme}"</h1>
            { this.state.isFinished
              ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.onRetryHandler}
                onSelectQuiz={this.props.onSelectQuiz}
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
    } else {
      return (
        <h1>Quiz not loaded</h1>
      )
    }

  }
}

export default Quiz