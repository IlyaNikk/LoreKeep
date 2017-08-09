'use strict';

import Block from '../block/block';
import LinkInfo from '../linkInfo/linkInfo';
import './linkGroup.css';

export default class LinkGroup extends Block {

	/**
	 * Link Group constructor
	 */
	constructor() {
		super('section', {});
		this.get().classList.add('links-group');
		this.get().classList.add('links-content');
		this.outerBlock = new Block('div', {});
		this.createGroup();
	}

	/**
	 * Creating link group
	 */
	createGroup() {
		this.outerBlock.get().classList.add('links-group__content');
		this.outerBlock.get().classList.add('links-group_appear');
		this.outerBlock.get().addEventListener('animationend', this.removeAnimation.bind(this));
		let divGroup = [];
		let LinkGroups = 3;
		for (let i = 0; i < LinkGroups; i++) {
			divGroup[i] = new Block('div', {});
			divGroup[i].get().classList.add('content-column');
			divGroup[i].get().classList.add('content-column_appear');
		}
		for (let i = 0; i < LinkGroups + 4; i++) {
			divGroup[i % 3].get().appendChild(new LinkInfo().get());
		}
		for (let i = 0; i < LinkGroups; i++) {
			this.outerBlock.get().appendChild(divGroup[i].get());
		}
		this.get().appendChild(this.outerBlock.get());
	}

	removeAnimation(event) {
		event.preventDefault();
		if(event.animationName === 'link_appear') {
			event.target.classList.remove('content-column_appear');
		} else if(event.animationName === 'content_appear') {
			this.outerBlock.get().classList.remove('links-group_appear');
		}
		// event.target.removeEventListener('animationend', this.removeAnimation);
	}


	/**
	 * Remove link group from DOM
	 */
	clearLinkGroup() {
		this.outerBlock.get().classList.remove('links-group__content');
		this.outerBlock.get().classList.remove('links-group_appear');
		this.get().removeChild(this.outerBlock.get());
		this.get().parent.removeChild(this.get());
	}
}

