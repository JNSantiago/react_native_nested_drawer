import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default SideMenuItem = ({page, openPage}) => {
    console.log(page['routeName'])
    return (
        <Text
            style={styles.navItemStyle}
            onPress={() => openPage(page['routeName'])}>
            { page['routeName'] }
        </Text>
    );
}

const styles = StyleSheet.create({
    navItemStyle: {
        padding: 10
    }
})