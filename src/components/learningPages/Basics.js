import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


function Basics({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Basics')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Basics</Text>
        </View>
    );
}

Basics.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
};

export default Basics