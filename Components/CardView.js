
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import styles from '../Styles/styles';

const dimensions = Dimensions.get('window');
const width = dimensions.width;


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
  //TODO: Rotate image when expanding details 
  // transform: [{ rotate: '90deg'}]

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
          return (
          <Text key={i}>{"\n"}
            <Text style={{fontSize: 8, color: '#cdcdcd'}}>{i+1}.</Text>
            <Text style={{fontSize: 8}} >{item}</Text>
           </Text>)
        }
        )}   
    

    return (        
        <View 
        style={styles.resultCard}>
          <Text onPress={()=>{
          this.setState({isExpanded: !this.state.isExpanded})
          this.forceUpdate();
          }}> 
          
            <View style={{width: width*.2, height: 50, flex: -1, flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={{alignSelf: 'stretch', textAlign: 'center', fontSize: 10}}>{this.state.kana}</Text> 
              <Text style={{alignSelf: 'stretch', textAlign: 'center', fontSize: 20}}>{this.state.kanji}</Text> 
            </View> 
            <Image style={{height: 10, width: 10}}source={require('../keyboard-right-arrow-button.png')}/>

          {expandedView}
          </Text>
        </View>
    )
  }
}

