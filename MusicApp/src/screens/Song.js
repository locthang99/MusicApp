import React, { Component } from 'react'
import {
    StyleSheet,
    Button,
    View
} from 'react-native'
import Player, { MyPlayerBar } from '../player/Player'
import {MyComponent} from '../player/Test'
export default class SongScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Song Screen'
                    onPress={() => {
                        //this.props.navigation.navigate('Home');
                        //console.log("a");
                       Player.PlayMusic("haha",'http://api.mp3.zing.vn/api/streaming/audio/ZWAEIUUB/128','a','b','c',10);
                    }}
                />
                <MyPlayerBar></MyPlayerBar>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});