'use strict';

import Block from '../block/block';
import './linkInfo.css';

export default class linkInfo extends Block {

	/**
	 * Link constructor
	 */
	constructor() {
		super('div', {});
		this.get().classList.add('link');
		this.get().classList.add('link_border');
		this.setInfo();
	}

	/**
	 * Creating link with info
	 */
	setInfo() {
		let title = new Block('p', {});
		title.get().classList.add('link__title');
		let description = new Block('p', {});
		description.get().classList.add('link__description');
		let link = new Block('p', {});
		link.get().classList.add('link__link');
		title.get().innerHTML = "Some Title";
		description.get().innerHTML = "Some description";
		link.get().innerHTML = "Link";
		this.get().appendChild(title.get());
		this.get().appendChild(description.get());
		this.get().appendChild(link.get());
	}
}

