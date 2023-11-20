import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';
// import { Button } from '@rneui/themed';


const LearnPage = ({ navigation }) => {
    return (
        <View>

            <View style={styles.grid}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Button
                            color="#eb7cbe"
                            title="Basics"
                            onPress={() => navigation.navigate('Basics')}
                        />
                    </View>
                    <View style={styles.col}>
                        <Button
                            color="#f0b562"
                            title="Alphabet"
                            onPress={() => navigation.navigate('Alphabet')}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Button
                            color="#6eb9ff"
                            title="Animals"
                            onPress={() => navigation.navigate('Animals')}
                        />
                    </View>
                    <View style={styles.col}>
                        <Button
                            title="Food"
                            titleStyle={{fontWeight: 'bold', fontSize: 18}}
                            color='#ff7375'
                            onPress={() => navigation.navigate('Food')}
                        />
                    </View>
                </View>  
            </View>


            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Learn')}
                    
                >slay</Text>
            </View>

        </View>
    );
}



const styles = StyleSheet.create({

    grid:{
        padding:65
        
    },

    row:{
        flexDirection:"row",
        padding:20
    },

    col:{
        flexDirection:'column',
        padding:20
    },


})

LearnPage.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
};


export default LearnPage