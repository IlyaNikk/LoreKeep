'use strict';

import Block from '../block/block';
import LinkInfo from '../linkInfo/linkInfo';

export default class LinkGroup extends Block{
	constructor(){
		super('section', {});
		this.get().classList.add('links-group');
		this.get().classList.add('links-content');
		this.createGroup();
	}

	createGroup(){
		let outerBlock = new Block('div',{});
		outerBlock.get().classList.add('links-group__content');
		outerBlock.get().classList.add('links-group_appear');
		let divGroup = [];
		let LinkGroups = 3;
		for(let i = 0; i < LinkGroups; i++){
			divGroup[i] = new Block('div', {});
			let animationRemove = () => {
				console.log('ololollol');
				divGroup[i].get().classList.remove('content-column_appear');
				divGroup[i].get().removeEventListener('animationend', animationRemove);
			};
			divGroup[i].get().addEventListener('animationend', animationRemove);
			divGroup[i].get().classList.add('content-column');
			divGroup[i].get().classList.add('content-column_appear');
		}
		for(let i = 0; i < LinkGroups + 4; i++){
			divGroup[i % 3].get().appendChild(new LinkInfo().getLinkInfo());
		}
		for(let i = 0; i < LinkGroups; i++){
			outerBlock.get().appendChild(divGroup[i].get());
		}
		this.get().appendChild(outerBlock.get());
	}

	getLinkGroup(){
		return this.get();
	}
}
