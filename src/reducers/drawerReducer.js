export const initialState = {
    drawerActive: ''
}

export default drawerReducer = (state, action) => {
    switch (action.type) {
        case 'set_drawer':
            return { ...state, drawerActive: action.drawer };
    }
};