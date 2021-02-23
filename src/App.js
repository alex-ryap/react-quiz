import './App.css';
import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Navigation from './containers/Navigation/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuiz: null,
      tests: [
        {
          theme: {
            id: 1,
            name: 'История'
          },
          quiz: [
            {
              question: 'В каком году основали Санкт-Петербург?',
              rightAnswerId: 3,
              id: 1,
              answers: [
                {text: '1700', id: 1},
                {text: '1709', id: 2},
                {text: '1703', id: 3},
                {text: '1721', id: 4}
              ]
            },
            {
              question: 'В каком году была Отечественная война с Наполеоном?',
              rightAnswerId: 2,
              id: 2,
              answers: [
                {text: '1603', id: 1},
                {text: '1812', id: 2},
                {text: '1703', id: 3},
                {text: '1939-1945', id: 4}
              ]
            },
            {
              question: 'В каком году произошел распад СССР?',
              rightAnswerId: 1,
              id: 3,
              answers: [
                {text: '1993', id: 1},
                {text: '2000', id: 2},
                {text: '1945', id: 3},
                {text: '2007', id: 4}
              ]
            },
            {
              question: 'Какая страна заняла место бывшего СССР в ООН?',
              rightAnswerId: 4,
              id: 4,
              answers: [
                {text: 'Латвия', id: 1},
                {text: 'Украина', id: 2},
                {text: 'Белоруссия', id: 3},
                {text: 'Россия', id: 4}
              ]
            },
          ],
        },
        {
          theme: {
            id: 2,
            name: 'Технологии'
          },
          quiz: [
            {
              question: 'Какой протокол используются для передачи данных без потерь?',
              rightAnswerId: 1,
              id: 1,
              answers: [
                {text: 'TCP', id: 1},
                {text: 'UDP', id: 2},
                {text: 'HTTP', id: 3},
                {text: 'HTTPS', id: 4}
              ]
            },
            {
              question: 'Какой протокол используются для передачи данных c потерями?',
              rightAnswerId: 2,
              id: 2,
              answers: [
                {text: 'TCP', id: 1},
                {text: 'UDP', id: 2},
                {text: 'HTTP', id: 3},
                {text: 'HTTPS', id: 4}
              ]
            },
            {
              question: 'Какой язык программирования изобрел Гвидо ван Россум?',
              rightAnswerId: 2,
              id: 3,
              answers: [
                {text: 'C#', id: 1},
                {text: 'Python', id: 2},
                {text: 'Java', id: 3},
                {text: 'JavaScript', id: 4}
              ]
            },
            {
              question: 'Какой язык программирования является "монополистом" в разработке UI сайтов?',
              rightAnswerId: 4,
              id: 4,
              answers: [
                {text: 'C#', id: 1},
                {text: 'Python', id: 2},
                {text: 'Java', id: 3},
                {text: 'JavaScript', id: 4}
              ]
            },
          ]
        },
        {
          theme: {
            id: 3,
            name: 'Биология'
          },
          quiz: [
            {
              question: 'Как называются вирусы, поражающие бактерии?',
              rightAnswerId: 2,
              id: 1,
              answers: [
                {text: 'Пикорнавирусы', id: 1},
                {text: 'Бактериофаги', id: 2},
                {text: 'Бактериальные', id: 3},
                {text: 'Сателлиты', id: 4}
              ]
            },
            {
              question: 'Какой размер имеют вирусы?',
              rightAnswerId: 1,
              id: 2,
              answers: [
                {text: '20-300 нм', id: 1},
                {text: '20-300 мм', id: 2},
                {text: '20-30 нм', id: 3},
                {text: '20-30 мм', id: 4}
              ]
            },
            {
              question: 'Какой генетический материал содержит вирус оспы?',
              rightAnswerId: 2,
              id: 3,
              answers: [
                {text: 'Одноцепочную ДНК', id: 1},
                {text: 'Двуцепочную ДНК', id: 2},
                {text: 'Одноцепочную РНК', id: 3},
                {text: 'Двуцепочную РНК', id: 4}
              ]
            },
            {
              question: 'К каким вирусам относится ВИЧ?',
              rightAnswerId: 3,
              id: 4,
              answers: [
                {text: 'Реовирусы', id: 1},
                {text: 'Ротавирусы', id: 2},
                {text: 'Ретровирусы', id: 3},
                {text: 'Парвовирусы', id: 4}
              ]
            },
          ]
        },
      ]
    }
  }

  onChangeQuiz = (quizId) => {
    this.setState({
      activeQuiz: quizId
    })
  }

  onSelectQuiz = () => {
    this.setState({
      activeQuiz: null
    })
  }

  render() {
    return (
      <Layout>
        { this.state.activeQuiz
          ? <Quiz
              theme={this.state.tests[this.state.activeQuiz - 1].theme.name}
              quiz={this.state.tests[this.state.activeQuiz - 1].quiz}
              onSelectQuiz={this.onSelectQuiz}
            />
          : <Navigation
              tests={this.state.tests}
              onClick={this.onChangeQuiz}
            />
        }
      </Layout>
    );
  }
}

export default App;
