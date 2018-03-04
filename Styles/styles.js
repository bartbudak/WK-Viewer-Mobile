'use strict';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        width: '100%',
        borderColor: "#7CD54B",
        borderWidth: 2,
        padding: 5,
        marginBottom: 10,
        alignSelf: 'stretch'
      },
      resultCardNC:{
        backgroundColor: '#FFFFFF',
        width: '80%',
        borderColor: "#CDCDCD",
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
        height: 40, borderColor: '#879196', borderWidth: 2, width: "100%"
      },
      searchButton: {
        height: 40, borderColor: '#0000b3', backgroundColor: '#0000b3', borderWidth: 3, width: "100%"
      },
      scrollView: {
        width: '100%', alignContent: 'center', alignItems: 'center', paddingTop: '2%'
      }

  });

export default styles;

module.exports = styles;
