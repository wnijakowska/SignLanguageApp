import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import PropTypes from 'prop-types';


const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Sign App</Text>
      </View>

  
      <View style={{ flex: 18, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.welcomeText}>Welcome!
            </Text>

      </View>

    </SafeAreaView>
  )
}


HomePage.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
  titleContainer:{
    backgroundColor: '#3b259c',
    padding: 20,
    flex:1,
    alignItems: 'center'
  },

  titleText:{
    color: '#e0e0e0',
    fontSize: 25
  },

  wrapper:{
    flex:1
  },

  welcomeText:{
    fontSize: 26, 
    fontWeight: 'bold'
  }
})
export default HomePage;