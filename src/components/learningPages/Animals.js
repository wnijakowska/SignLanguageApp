import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


function Animals({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Animals')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Animals Screen</Text>
        </View>
    );
}

Animals.propTypes = {
    navigation : PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
};

export default Animals