/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ScrollView,
    TouchableHighlight
} from 'react-native';
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
            previousSearchTerms: [],
            isLoading: true
        };
    }

    duplicateSearchTerm = (term) => {
        return this.state.previousSearchTerms.indexOf(term) > -1;
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    ref={component => this._searchBox = component}
                    placeholder="Search..."
                    style={{height: 40, width: "90%"}}
                    onChangeText={(text) => this.setState({text})}
                />
                <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row'}}>
                    <Button
                        onPress={() => {
                            if(!this.duplicateSearchTerm(this.state.text)) {
                                this.state.previousSearchTerms.push(this.state.text);
                            }
                            getTranslation(this.state.text)
                                .then((jishoRes) => {
                                    this.setState({
                                        isLoading: false,
                                        jishoData: jishoRes,
                                    })
                                });
                        }}
                        title='Search'
                        color='#897196'
                    ></Button>
                    <Button
                        onPress={() => {
                            this.setState({
                                isLoading: false,
                                jishoData: []
                            })
                            this._searchBox.setNativeProps({ text : '' })
                        }}
                        title="Clear"
                    ></Button>
                </View>
                <ScrollView contentContainerStyle={{
                    paddingTop: 20,
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    {this.state.jishoData.map((item, i) =>
                        <Text key={i} style={styles.resultCard}>
                            {item.japanese[0].reading} - {item.japanese[0].word}
                        </Text>
                    )}
                </ScrollView>
                <ScrollView contentContainerStyle={{
                    paddingTop: 20,
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    {this.state.previousSearchTerms.map((item, i) =>
                        <TouchableHighlight key={i}
                            onPress={() => {
                                this.setState({
                                    text : item
                                });
                                this._searchBox.setNativeProps({ text : item })
                                getTranslation(item)
                                    .then((jishoRes) => {
                                        this.setState({
                                            isLoading: false,
                                            jishoData: jishoRes,
                                        })
                                    });
                            }}>
                            <Text style={styles.resultCard}>
                                {item}
                            </Text>
                        </TouchableHighlight>
                    )}
                </ScrollView>
            </View>
        );
    }
}

