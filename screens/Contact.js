import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenText: 'Press a button!'
    }
  }

  changeText = (text) => {
    console.log(text + ' has been pressed!')
    this.setState({
      screenText: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 30, color: 'white' }}>{this.state.screenText}</Text>
          <StatusBar style="light" />
        </View>

        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable onPress={() => this.changeText('Facebook')} style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 50 }}>
              <Icon name="facebook" size={30} color="#0000ff"  />
            </Pressable>
            <Pressable onPress={() => this.changeText('Line')} style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 50 }}>
              <Icon name="comment" size={30} color="#00ff00"  />
            </Pressable>
            <Pressable onPress={() => this.changeText('0921111111')} style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 50 }}>
              <Icon name="phone" size={30} color="#000000"  />
            </Pressable>
            <Pressable onPress={() => this.changeText('moneytransfer.jpg')} style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 50 }}>
              <Icon name="money" size={30} color="#556b2f"  />
            </Pressable>
            
          </View>
        </View>

      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC99",
    alignItems: 'center',
    justifyContent: 'center',

  },

  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 50,
  },
  

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40
  },

  IconBehave: {
    padding: 14
  }
});
