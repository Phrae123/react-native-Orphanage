import { View, Text, Image, Pressable} from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Login')
    }
  return (
  <Pressable onPress={onPress}>
    <View style = {{height: "100%", alignItems: "center", backgroundColor: "#FFCC99"}}>
      <View style = {{flex: 0.95, justifyContent: "center"}}>
        <Image source={require('../img/logo.png')} style = {{ width: 150, height: 150}}/>
      </View>
      <View style = {{flex: 0.05}}>
        <Text style= {{ color: "white"}}>Orphanage.co</Text>
      </View>
    </View>
    </Pressable>
  )
}

export default Splash