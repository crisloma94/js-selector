import Toolbar from './../components/Toolbar';

import './../styles/views/SelectorPage.scss';

import * as constants from '../config/constants';

/**
 * Page with a options selector
 */
export default class SelectorPage {
	/**
	 * The class constructor
	 */
	constructor() {
		this.toolbar = new Toolbar();
	}

	/**
	 * Initializes the component, calls the render method
	 */
	init() {
		document.querySelector('#main').innerHTML = this.render();
	}

	/**
	 * Returns the HTML of the component
	 */
	render() {
		return `
			<div class="page selector-page"> 
				<div class="top">
					${this.toolbar.render()}
				</div>      
				<div class="content"></div>
			</div>
        `;
	}
}
