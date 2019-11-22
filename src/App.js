import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Spinner } from 'reactstrap';
import './App.css';
export class App extends Component {
  state = {
    theAnswer: '',
    loading: false,
  }

  getNumberForText = () => Math.ceil(Math.random() * 3)

  getAnswerForText = (number) => {
    if (number === 1) {
      return 'Нежный шепот';
    } else if (number === 2) {
      return 'Сладкая обнимашка';
    } else if (number === 3) {
      return 'Рука в руке';
    }
  }

  onGetAnswer = () => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({
        theAnswer: this.getAnswerForText(this.getNumberForText()),
        loading:false,
      })
    }, 1000);
  }

  renderBody = () => this.state.loading
      ? <Spinner color="success" />
      : <>{this.state.theAnswer}</>

  render() {
    return (
      <>
        <div className="wrapper">
          <h1 className="firstString">Добрый вечер, Господин!)</h1>
          <Button
            className="btn"
            color="success"
            onClick={this.onGetAnswer}
            >Как мы Ваc сегодня усыпим?)</Button>
          <div className="answer">{this.renderBody()}</div>
        </div>
      </>
    )
  }
}
