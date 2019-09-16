import React from 'react';

import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

import SideMenu from './components/SideMenu';

export default Routes = createAppContainer(
    createDrawerNavigator({
        Page1: {
            screen: Page1,
            params: { section: 'section_1' }
        },
        Page2: {
            screen: Page2,
            params: { section: 'section_2' }
        },
        Page3: {
            screen: Page3,
            params: { section: 'section_2' }
        }
    }, {
        contentComponent: SideMenu
    })
)