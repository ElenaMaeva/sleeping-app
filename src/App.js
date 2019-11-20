import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

export class App extends Component {
  render() {
    return (
        <>
        <div className="wrapper">
        <h1 className="firstString">Добрый вечер, Господин!)</h1>
        <img className="img" src="../img/people_1_krujka_front_white_250.jpg" alt="Surprise"/>
        <Button className="btn" color="success">Как мы Ваc сегодня усыпим?)</Button>
        </div>
        </>
      )
  }
}
