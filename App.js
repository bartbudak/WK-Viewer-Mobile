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
      color='#897196'
      ></Button>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
      {this.state.jishoData.map((item, i)=>
      {
        <CardView kana={item.japanese[0].reading} kanji={item.japanese[0].kanji}/>
      }
      )}   
      </ScrollView>
      </View>
    );
  }
}

