import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
export class App extends Component {
  state = {
    theAnswer: '',
  }

getNumberForText = () => Math.ceil(Math.random() * 3)

onGetAnswer = () => {
  this.setState({
      theAnswer: this.getNumberForText(),
  })
}

renderBody = () => {
  if(this.state.theAnswer === 1) {
    return 'Нежный шепот'
  } else if(this.state.theAnswer === 2) {
    return 'Сладкая обнимашка'
  } else if(this.state.theAnswer === 3) {
    return 'Рука в руке'
  }
}

  render() {
    return (
        <>
        <div className="wrapper">
        <h1 className="firstString">Добрый вечер, Господин!)</h1>
        <img className="img" src="../img/people_1_krujka_front_white_250.jpg" alt="Surprise"/>
        <Button
          className="btn"
          color="success"
          onClick={this.onGetAnswer}
          >Как мы Ваc сегодня усыпим?)</Button>
        <div className="answer">{this.renderBody()}</div>
        <div></div>
        </div>
        </>
      )
  }
}
