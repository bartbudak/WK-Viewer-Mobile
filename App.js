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
import renderIf from './node_modules/render-if/lib/renderIf'
import styles from './Styles/styles'
import {getTranslation} from './Services/getTranslation'

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
      {{renderIf(item.is_common == 'true')(
        <Text style={styles.resultCard}>            
        {item.japanese[0].reading} - {item.japanese[0].word}
        </Text>
      )}

      {renderIf(item.is_common == 'false')(
        <Text style={styles.resultCardNC}>            
        {item.japanese[0].reading} - {item.japanese[0].word}
        </Text>
      )}}
      
      )}   
      </ScrollView>
      </View>
    );
  }
}

