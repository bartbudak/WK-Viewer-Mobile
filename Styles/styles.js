'use strict';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        paddingTop: 20
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      resultCard:{
        backgroundColor: '#FFFFFF',
        width: '80%',
        borderColor: "#7CD54B",
        borderWidth: 2,
        padding: 5,
        marginBottom: 10
      },
      uncommResultCard:{
        backgroundColor: '#FFFFFF',
        width: '80%',
        borderColor: "#cdcdcd",
        borderWidth: 2,
        padding: 5,
        marginBottom: 10
      },
      searchBox: {
        height: 40, borderColor: 'gray', borderBottomWidth: 1, width: "90%"
      },
      scrollView: {
        width: '100%', alignContent: 'center', alignItems: 'center'
      }

  });

export default styles;

module.exports = styles;
