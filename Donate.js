import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, Alert, Text} from "react-native";
import axios from 'axios';
import Home from "./Home";
import { ScrollView } from "react-native-gesture-handler";


const Separator = () => (
  <View style={styles.separator} />
  );

const Donate = () => {
  const [tdonate, textdonate] = React.useState(null);
  const [tdate, textdate] = React.useState(null);
  const [thr, texthr] = React.useState(null);
  const [tminutes, textminutes] = React.useState(null);
  const [tname, textname] = React.useState(null);
  const [tsurname, textsurname] = React.useState(null);

  sendData = () => {
    console.log(tdonate)
    var data = JSON.stringify({
      "donate": parseInt(tdonate),
      "tdate": tdate,
      "thr": thr,
      "tminutes": tminutes,
      "tname": tname,
      "tsurname": tsurname
    });

    var config = {
      method: 'post',
      url: 'http://10.0.2.2:3001/save',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.message);
    });

  }


  
  return (
    <ScrollView>
      <Text style={styles.baseText}>
      {"\n"}
      กรุณาใส่ยอดเงินบริจาค
      {"\n"}
      </Text>
      <Text style={styles.Text}>
      จำนวนเงินที่บริจาค
      </Text>
      <TextInput
        style={styles.donate}
        onChangeText={textdonate}
        placeholder="- -"
        value={tdonate}
      />
      <Text style={styles.Text}>
      วัน/เดือน/ปี การโอนเงิน(กรอกตามสลิปการโอน)
      </Text>
      <TextInput
        style={styles.date}
        onChangeText={textdate}
        placeholder="วัน/เดือน/ปี"
        value={tdate}
      />
      <Text style={styles.Text}>
      กรุณากรอกเวลาการโอนเงิน(กรอกตามสลิปการโอน)
      </Text>
      <TextInput
        style={styles.hr}
        onChangeText={texthr}
        placeholder="Hour"
        value={thr}
      />
      <TextInput
        style={styles.minutes}
        onChangeText={textminutes}
        placeholder="Minute"
        value={tminutes}
      />
      <Text style={styles.Text}>
      ชื่อ - นามสกุล(กรอกตามสลิปการโอน)
      </Text>
      <TextInput
        style={styles.name}
        onChangeText={textname}
        placeholder="Name"
        value={tname}
      />
      <TextInput
        style={styles.surname}
        onChangeText={textsurname}
        placeholder="Surname"
        value={tsurname}
      />
      <Button
        style={styles.button}
        title="บันทึกข้อมูล"
        color="#f194ff" onPress={sendData}
      />
      {/* <Button  
        style={styles.loginBtn}
        title="Go to Profile"  
        onPress={() => this.props.navigation.navigate('Home')}  
      />   */}
      </ScrollView>
      
  );
};

{/* <View>
      <Button
        onPress={sendData}
      />
      </View> */}
// function App({ navigation }) {
//   return (
//     <View style={{ flex: 1}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }
const styles = StyleSheet.create({
  donate: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  date: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  hr: {
    width:'40%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  minutes: {
    width:'40%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  name: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  surname: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf:"center"
  },
  Text: {
    fontSize: 16,
  },
  button: {
    marginVertical: 8,
  },
});


export default Donate;


