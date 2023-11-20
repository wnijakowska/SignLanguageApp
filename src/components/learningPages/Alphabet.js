import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


function Alphabet({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Alphabet')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Alphabet Screen</Text>
        </View>
    );
}

Alphabet.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
};

export default Alphabet