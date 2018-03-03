
import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import styles from '../Styles/styles'


export default class CardView extends Component{
  constructor(props) {
    super(props);
    this.state = { 
        kana: '',
        kanji: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      kana: nextProps.kana,
      kanji: nextProps.kanji
    });
}


  render() {

    return (        
        <Text> {this.state.kana} - {this.state.kanji}</Text>
    )
  }
}

