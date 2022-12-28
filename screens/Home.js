import { View, Text, ScrollView, Image, Pressable, StyleSheet} from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
    const onPressItem = (id, name) => {
        navigation.navigate('Detail', { id: id, name: name })
    }
  return (
    <ScrollView style = {{ padding: 10 }}>
      <View>
        <Text style={{ fontSize: 30}}>Orphanage</Text>
      </View>
      <View style={{ marginVertical: 10}}>
        <Pressable onPress={() => onPressItem (1, 'บ้านเด็กอ่อน')}>
            <Image source={require('../img/Orphanage/Dakon.jpg')} style = {{ width: "100%", height: 333}} />
            <Text style={{ fontSize: 20, marginTop: 10 }}>บ้านเด็กอ่อน</Text>
            <Text>บ้านเด็กอ่อน เป็นโครงการที่อยู่ภายใต้การดูแลของท่านจ้าอาวาสวัดพระบาทน้ำพุ เพื่อเป็นที่พึ่งพิงให้แก่เด็ก ๆ ด้อยโอกาสที่ติดเชื้อ HIV และที่พ่อแม่เสียชีวิตจากเชื้อ HIV ค่ะ ซึ่งน้องๆ ต้องเดินทางเข้าออกโรงพยาบาลทุกวัน ไหนจะค่ายา ทำให้แต่ละวันมีค่าใช้จ่ายสูงมาก
ปัจจุบันบ้านธรรมรักษ์ขาดแคลนทั้งเงิน อาหาร และสิ่งของจำเป็น รวมทั้งอุปกรณ์กันหนาวด้วย เราสามารถร่วมกันบริจาคเงินและสิ่งของ สานต่อชีวิตและเป็นกำลังใจให้น้องๆ กันนะคะ</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10}}>
        <Pressable onPress={() => onPressItem (2, 'มูลนิธิกองทุนการศึกษาเพื่อการพัฒนา(EDF)')}>
        <Image source={require('../img/Orphanage/EDF.png')} style = {{ width: "100%", height: 333}} />
        <Text style={{ fontSize: 20, marginTop: 10 }}>มูลนิธิกองทุนการศึกษาเพื่อการพัฒนา(EDF)</Text>
        <Text>มูลนิธิกองทุนการศึกษาเพื่อการพัฒนา หรือ EDF ทำงานระดุมทุนร่วมกับองค์กรในประเทศญี่ปุ่น นับเป็นสถานสงเคราะห์เด็กที่ช่วยเหลือทุนทางการเรียนให้แก่นักเรียนที่ยากไร้ทั่วประเทศไทย โดยร่วมมือกับโรงเรียนและคุณครูในโรงเรียนขนาดเล็กทั่วประเทศในทุกภูมิภาค เพื่อให้เด็กๆ ที่ยากจนและไม่มีเงินได้เรียนหนังสือ</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10}}>
        <Pressable onPress={() => onPressItem (3, 'มูลนิธิสงเคราะห์เด็กอ่อนพิการทางสมองและปัญญา (บ้านเฟื่องฟ้า)')}>
        <Image source={require('../img/Orphanage/FF.jpg')} style = {{ width: "100%", height: 333}} />
        <Text style={{ fontSize: 20, marginTop: 10 }}>มูลนิธิสงเคราะห์เด็กอ่อนพิการทางสมองและปัญญา (บ้านเฟื่องฟ้า)</Text>
        <Text>บ้านเฟื้องฟ้าเป็นสถานสงเคราะห์เด็กอ่อนของรัฐ  ที่รับผิดชอบดูแลเด็กอ่อนพิการทุกประเภทตั้งแต่แรกเกิด – 7 ปี ส่วนมากจะเป็นเด็กพิการทางสมองและน้องๆ ที่นอนติดเตียง จำเป็นต้องได้รับการดูแลและรักษาเป็นพิเศษ ทำให้ค่าใช้จ่ายแพงมากค่ะ </Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10}}>
        <Pressable onPress={() => onPressItem (4, 'บ้านธรรมรักษ์')}>
        <Image source={require('../img/Orphanage/thammaruk.jpg')} style = {{ width: "100%", height: 333}} />
        <Text style={{ fontSize: 20, marginTop: 10 }}>บ้านธรรมรักษ์</Text>
        <Text>บ้านธรรมรักษ์ เป็นโครงการที่อยู่ภายใต้การดูแลของท่านจ้าอาวาสวัดพระบาทน้ำพุ เพื่อเป็นที่พึ่งพิงให้แก่เด็ก ๆ ด้อยโอกาสที่ติดเชื้อ HIV และที่พ่อแม่เสียชีวิตจากเชื้อ HIV ค่ะ ซึ่งน้องๆ ต้องเดินทางเข้าออกโรงพยาบาลทุกวัน ไหนจะค่ายา ทำให้แต่ละวันมีค่าใช้จ่ายสูงมาก </Text>
        </Pressable>
      </View>
      
    </ScrollView>
  )
}

export default Home