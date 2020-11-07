import SelectorPage from './views/SelectorPage';

import './styles/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
	//Creates an instance of the SearchPage class and renders it
	let selectorPage = new SelectorPage();
	selectorPage.init();
});
