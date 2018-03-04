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
  Button,
  ScrollView
} from 'react-native';
import CardView from './Components/CardView'
import styles from './Styles/styles'
import {getTranslation} from './Services/getTranslation'

export default class App extends Component{
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
        style={styles.searchBox}
        onChangeText={(text) => this.setState({text})}
      />
      <View style={styles.searchButton}>
      <Button
      onPress={()=>{
        getTranslation(this.state.text)
          .then((jishoRes) => {
            this.setState({
              isLoading: false,
              jishoData: jishoRes,
            })
          })   
      }}
      title='Search'
      color='white'
      ></Button>
      </View>
      
      
      <ScrollView 
      width="100%"
      display="flex"
      contentContainerStyle={styles.scrollView}>
      {this.state.jishoData.map((item, i)=>
      {
        return (<CardView style={{width: '100%'}}key={i} kana={item.japanese[0].reading} kanji={item.japanese[0].word} definition={item.senses[0].english_definitions}/>)
      }
      )}   
      </ScrollView>
      </View>
    );
  }
}

