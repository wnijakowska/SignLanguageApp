import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


function Food({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Food')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Food Screen</Text>
        </View>
    );
}

Food.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
};

export default Food