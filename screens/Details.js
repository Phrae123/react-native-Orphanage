import { View, Text, Image, StyleSheet,TextInput,Button,TouchableOpacity,Pressable, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'

const Separator = () => (
  <View style={styles.separator} />
  );

const Images = {
    1: require('../img/Orphanage/Dakon.jpg'),
    2: require('../img/Orphanage/EDF.png'),
    3: require('../img/Orphanage/FF.jpg'),
    4: require('../img/Orphanage/thammaruk.jpg')

}


const Details = ({ navigation, route }) => {
  const onPress0= ()=>
  navigation.navigate('Contact')
  return (
    <ScrollView>
    <View>
        <Image source={Images[route.params.id]} style = {{ width: "100%", height: 333}} />
        <Text style={{ fontSize: 20, marginTop: 10, padding: 10 }}>{route.params.name}</Text>  
        
    </View>
    
    <Separator />
    <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress0}>
      <Text style= {{ color: "black" }}>CONTACT</Text>
    </TouchableOpacity>
  </View>   
  </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#FFCC99",
      padding: 10
    },
  });
  
  
export default Details;