import OptionSelector from './OptionSelector';

import './../styles/components/toolbar.scss';

import content from './../data/content.json';

import * as constants from './../config/constants';

export default class Toolbar {
	/**
	 * The class constructor
	 */
	constructor(options) {
		this.optionAll = new OptionSelector(constants.ALL, constants.ALL);
		this.options = content.options;
		this.options.map((option)=> {
			this['option'+option.id] = new OptionSelector('Option ' + option.id, option.id);
		});
	}

	/**
	 * Returns the HTML of the component
	 */
	render() {
		return `
			<div id="toolbar" class="box">
				${this.optionAll.render()}
				${this.options.map((option)=>{
					return this['option'+option.id].render()
				}).join('')}
			</div>
		`;
	}

	/**
	 * Adds the logic to the component
	 */
	afterRender() {
		this.optionAll.afterRender();
		this.options.map((option)=>{this['option'+option.id].afterRender()});
    }

}
