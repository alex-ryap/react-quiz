import React from 'react';
import './Navigation.css'
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
  return (
    <div className={'Navigation'}>
      <div className={'NavigationWrapper'}>
        <h1>Выберите тест</h1>
        <div className={'Tests_list'}>
          <div className={'Tests_list_header'}>
            <p>Список тестов</p>
          </div>

          <ul>
            { props.tests.map((test, index) => {
              return (
                <NavigationItem
                  key={index}
                  question={test.theme}
                  onClick={props.onClick}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation