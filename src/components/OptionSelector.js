import './../styles/components/optionSelector.scss';

export default class OptionSelector {
	/**
	 * The class constructor
	 */
	constructor(value, selector) {
        this.value = value;
        this.selector = selector;
	}

	/**
	 * Returns the HTML of the component
	 */
	render() {
		return `
            <div id="option${this.selector}" class="option" data-selector="${this.selector}"> 
                ${this.value}
			</div>
		`;
    }

    /**
	 * Adds the logic to the component
	 */
    afterRender() {
        document.getElementById("option"+this.selector).addEventListener('click', ()=>this.toggleSelect());
    }
    
    /**
     * Selects the option
     */
    toggleSelect(e) {
        document.getElementById("option"+this.selector).classList.toggle("selected");
    }

    /**
     * Selects the option
     */
    select(e) {
        if(!this.isSelected()) {
            document.getElementById("option"+this.selector).classList.add("selected");
        }   
    }

    /**
     * Unselects the option
     */
    unselect(e) {
        if(this.isSelected()) {
            document.getElementById("option"+this.selector).classList.remove("selected");
        }
    }

    /**
     * Returns true if the option is selected, otherwise returns false
     */
    isSelected() {
        if (document.getElementById("option"+this.selector).classList.contains("selected")) {
            return true;
        } else {
            return false;
        }
    }
        
}