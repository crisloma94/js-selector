import Toolbar from './../components/Toolbar';
import ProgressBar from '../components/ProgressBar';

import './../styles/views/SelectorPage.scss';

import content from './../data/content.json';

import * as constants from './../config/constants';

/**
 * Page with a options selector
 */
export default class SelectorPage {
	/**
	 * The class constructor
	 */
	constructor() {
		this.options = content.options;
		this.toolbar = new Toolbar();
		this.progressBar = new ProgressBar();
	}

	/**
	 * Initializes the component, calls the render method
	 */
	init() {
		document.getElementById('main').innerHTML = this.render();
		this.afterRender();
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
				<div class="progress-bar">
					${this.progressBar.render()}
				</div>
				<div class="content">
					<div id="contentResult">
						${this.toolbar.options.map((option)=>{
							return `<div id="result${option.id}"></div>`
						}).join('')}
					</div>
				</div>
			</div>
        `;
	}

	/**
	 * Adds the logic to the page
	 */
	afterRender() {
		this.toolbar.afterRender();
		// Select all in first render
		this.selectAll();
		const optionItems = document.getElementsByClassName("option");	
		Array.prototype.map.call(optionItems, (item)=>{
			item.addEventListener('click', (e)=>this.handleOptionClick(e));
		});
	}

	/**
	 * Handles the click event
	 * @param {*} e 
	 */
	handleOptionClick(e) {
		const targetSelector = e.target.getAttribute("data-selector");

		if(targetSelector != constants.ALL && this.toolbar.optionAll.isSelected()){
			this.toolbar.optionAll.unselect();
			this.resetContent();
		}

		this.progressBar.reset();
		this.progressBar.move();
		
		setTimeout(()=>{			
			if(targetSelector === constants.ALL) {
				this.selectAll();
			} else {			
				if(this.toolbar.optionAll.isSelected()){
					this.resetContent();
				}
				if(this.toolbar['option' + targetSelector].isSelected()) {
					this.addContent(targetSelector);
				} else {
					this.removeContent(targetSelector);
				}
				
			}
			this.progressBar.reset();
		}, 3000);
	}

	/**
	 * Selects the 'All' option
	 */
	selectAll() {
		this.resetContent();
		this.toolbar.optionAll.select();
		const optionItems = document.getElementsByClassName("option");				
		Array.prototype.map.call(optionItems, (item)=>{
			const selector = item.getAttribute("data-selector");
			if(selector != constants.ALL) {				
				this.addContent(selector);
				this.toolbar['option' + selector].unselect();
			}
		});
	}

	/**
	 * Deletes all the content
	 */
	resetContent() {
		this.toolbar.options.map((option)=>{
			document.getElementById("result" + option.id).innerHTML = '';
		});
		
	}

	/**
	 * Adds content to an specific element
	 * @param {*} target 
	 */
	addContent(target) {
		const dataSelection = this.options.filter(
			(option)=>{ return option.id == target }
		);
		document.getElementById("result" + dataSelection[0].id).innerHTML = dataSelection[0].data.content;
	}

	/**
	 * Removes content of an specific element
	 * @param {*} target 
	 */
	removeContent(target) {
		const dataSelection = this.options.filter(
			(option)=>{ return option.id == target }
		);
		document.getElementById("result" + dataSelection[0].id).innerHTML = '';
	}
}
