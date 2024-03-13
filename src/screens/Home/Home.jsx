import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { s } from './Home.style'
import CustomBtn from '../../components/CustomBtn/CustomBtn'


const Home = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/home-page-background.png')}
     style={s.root}>
     <View style={s.titleContainer}>
     <Text style={s.boldTitle}>Art </Text>
     <Text style={s.title}>Store</Text>
     </View>
     <View style={s.imageContainer}>
        <Image 
        style={s.verticalImg}
        source={require('../../../assets/images/pic1.jpg')}
        />
        <Image
        style={s.verticalImg}
        source={require('../../../assets/images/pic2.jpg')}
        />
     </View>
     <Image style={s.horizontalImg} 
     source={require('../../../assets/images/6032628.jpg')}
      />
      <Text style={s.subTitle}>Discover the best art from the world's leading galleries and artists</Text>
      <CustomBtn />
    </ImageBackground>
  )
}

export default Home