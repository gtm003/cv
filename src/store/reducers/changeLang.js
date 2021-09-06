import initialState from '../initialState';

export default function onChangeLang(state = initialState.currentLang, action) {
    switch(action.type) {
        case 'CHANGE_LANG': return action.payload;
        
        default: return state;
    }
}