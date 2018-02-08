/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import styles from './Styles/styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      jishoData: [],
      isLoading: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Search..."
        style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, width: "90%"}}
        onChangeText={(text) => this.setState({text})}
      />
      <Button
      onPress={()=>{
      return fetch('https://jisho.org/api/v1/search/words?keyword=' + this.state.text.toString().toLowerCase())
      .then((response) => response.json())
      .then((responseJson) => {
        let jishoRes = []
        responseJson.data.forEach(function(item){
          jishoRes.push(item)
        })
        this.setState({
          isLoading: false,
          jishoData: jishoRes,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
      }}
      title='Search'
      color='#897196'
      ></Button>
      
      <View>
      {this.state.jishoData.map((item, i)=>
      <Text>            
      {item.japanese[0].reading} - {item.japanese[0].word}
      </Text>
      )}   
      </View>
      </View>
    );
  }
}

