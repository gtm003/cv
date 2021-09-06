import CHANGE_LANG from '../actions/changeLang';

const onChangeLang = (currentLang) => {
	return {
		type: CHANGE_LANG,
		payload: currentLang
	};  
}

export { onChangeLang };