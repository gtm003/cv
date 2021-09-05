import { combineReducers } from 'redux';
import currentLang from './changeLang';
//import changeTheme from './changeTheme'; 

const reducers = combineReducers({
    currentLang,
    //currentTheme
});

export default reducers;