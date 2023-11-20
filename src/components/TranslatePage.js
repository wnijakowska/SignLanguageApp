import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


function TranslatePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Translate')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Translate Screen</Text>
        </View>
    );
}

TranslatePage.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
};

export default TranslatePage