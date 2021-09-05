import CHANGE_LANG from '../actions/changeLang';

function CHANGE_LANG(value) {
	return {
		type: CHANGE_LANG,
		currentLang: value
	};
}

export default CHANGE_LANG;