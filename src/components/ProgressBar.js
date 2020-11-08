import './../styles/components/progressBar.scss';

export default class ProgressBar {
	/**
	 * The class constructor
	 */
	constructor() {
	}

	/**
	 * Returns the HTML of the component
	 */
	render() {
		return `
            <div id="progressBar" class="bar">
                <div id="progressIndicator"></div>
			</div>
		`;
    }

    move() {
        document.getElementById("progressIndicator").classList.remove("empty");
        document.getElementById("progressIndicator").classList.add("full");
    }

    reset() {
        document.getElementById("progressIndicator").classList.remove("full");
        document.getElementById("progressIndicator").classList.add("empty");
    }
}