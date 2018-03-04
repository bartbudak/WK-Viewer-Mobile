
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../Styles/styles';


export default class CardView extends Component{
  constructor(props) {
    super(props);
    this.state = { 
        kana: props.kana,
        kanji: props.kanji,
        isExpanded: false,
        definition: props.definition
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      kana: nextProps.kana,
      kanji: nextProps.kanji,
      definition: nextProps.definition
    });
}

  render() {

    let expandedView = null;
    if(this.state.isExpanded){
      expandedView = 
      this.state.definition.map((item, i)=>
        {
          return (<Text key={i}>{"\n"}{i+1} - {item}</Text>)
        }
        )}   
    

    return (        
        <View 
        style={styles.resultCard}>
          <Text style={{width: '100%'}} onPress={()=>{
          this.setState({isExpanded: !this.state.isExpanded})
          this.forceUpdate();
          }}> 
          {this.state.kana} - {this.state.kanji} 
          {expandedView}</Text>
        </View>
    )
  }
}

