import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import SideMenuSection from './SideMenuSection';

const sections = {
    section_1: {
        displayName: 'Section 1',
        keyName: 'section_1'
    },
    section_2: {
        displayName: 'Section 2',
        keyName: 'section_2'
    }
}

export default SideMenu = ({navigation, ...props}) => {
    const drawerPages = props.items

    getPages = (section) => drawerPages.filter((element) => element.params.section === section);

    openPage = (page) => {
        navigation.navigate(page)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            {
                Object.keys(sections).map(key => <SideMenuSection 
                        key={key}
                        routeName={sections[key].keyName}
                        sectionName={sections[key].displayName}
                        pages={ getPages(key) } 
                        openPage={ openPage }
                        />)
            }
            </ScrollView>
            <View style={styles.footerContainer}>
                <Text>This is my fixed footer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }
})