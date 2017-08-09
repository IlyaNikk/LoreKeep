'use strict';


export default class Block {
	/**
	 * Block constructor
	 * @param name - element name
	 * @param options - some options for this element
	 */
	constructor(name, options = {}){
		this._el = document.createElement(name);
		this.setAttrs(options)
	}

	/**
	 * Setting options to the element
	 * @param attrs - options
	 */
	setAttrs( attrs = {}){
		Object.keys(attrs).forEach(name =>{
			this._el.setAttribute(name, attrs[name]);
		})
	}

	/**
	 * return node element
	 * @returns {Element|*} - node element
	 */
	get(){
		return this._el;
	}
}
