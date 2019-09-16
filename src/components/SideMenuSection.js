import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import drawerReducer, { initialState } from './../reducers/drawerReducer';

import SideMenuItem from './SideMenuItem';

export default SideMenuSection = ({ routeName, sectionName, pages, openPage }) => {
    const [drawer, dispatchActiveDrawer] = useReducer(drawerReducer, initialState);
    return (
        <View>
            <Text
                style={styles.sectionHeadingStyle}
                onPress={() =>
                    dispatchActiveDrawer({
                        type: 'set_drawer',
                        drawer: drawer.drawerActive === routeName ? '' : routeName
                    })
                }>{sectionName}</Text>
            {
                drawer.drawerActive === routeName &&
                <View style={styles.navSectionStyle}>
                    {
                        Object.keys(pages).map(page => <SideMenuItem 
                                key={page} 
                                page={pages[page]}
                                openPage={ openPage } />)
                    }
                </View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    }
})