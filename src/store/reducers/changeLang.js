import CHANGE_LANG from '../actions/changeLang';
import initialState from '../initialState';

export default function currentLang(state = initialState.currentLang, action) {
    switch(action.type) {
        case CHANGE_LANG: return action.currentLang;
        
        default: return state;
    }
}