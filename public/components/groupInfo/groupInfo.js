'use strict';

import Block from '../block/block';
import LinkInfo from '../linkInfo/linkInfo';
import LinkGroup from '../linkGroup/linkGroup';

export default class GroupInfo extends Block {
	constructor() {
		super('section', {});
		this.get().classList.add('links-group');
		this.createGroup();
	}

	createGroup() {
		for (let i = 0; i < 3; ++i) {
			let divBlock = new Block('div', {});
			let insideBlock = new Block('div', {});
			let header = new Block('h1', {});
			header.get().innerHTML = 'Postgre SQL';
			switch (i) {
				case 0:
					divBlock.get().classList.add('first-group');
					insideBlock.get().classList.add('first-group__title');
					insideBlock.get().appendChild(header.get());
					break;
				case 1:
					divBlock.get().classList.add('middle-group');
					insideBlock.get().classList.add('middle-group__title');
					insideBlock.get().appendChild(header.get());
					break;
				case 2:
					divBlock.get().classList.add('final-group');
					insideBlock.get().classList.add('final-group__title');
					let addButton = new Block('div', {});
					addButton.get().classList.add('add-button');
					let span = new Block('span', {});
					span.get().innerHTML = 'Add new group';
					insideBlock.get().appendChild(addButton.get());
					insideBlock.get().appendChild(span.get());
					break;
			}
			divBlock.get().appendChild(insideBlock.get());
			this.listAppear(divBlock);
			this.get().appendChild(divBlock.get());
		}

	}

	listAppear(divBlock) {
		let triangle = new Block('span', {});
		triangle.get().classList.add('triangle-up');

		divBlock.get().addEventListener('click', () => {
			event.preventDefault();
			let array = document.getElementsByClassName('links-content');
			if (array.length === 1) {
				if (array[0].style.animationName !== "link_appear") {
					array[0].addEventListener('animationend', e => {
						e.preventDefault();
						console.log(e.animationName);
						array[0].parentNode.removeChild(array[0]);
						let oldTriangle = document.getElementsByClassName('triangle-up');
						oldTriangle[0].parentNode.removeChild(oldTriangle[0]);
						divBlock.get().appendChild(triangle.get());
						this.get().parentNode.appendChild(new LinkGroup().getLinkGroup());
					}, false);
					let appearBlock = document.getElementsByClassName('links-group_appear');
					appearBlock[0].classList.add('links-group_disappear');
					appearBlock[0].classList.remove('links-group_appear');
				}
			}
			else {
				divBlock.get().appendChild(triangle.get());
				this.get().parentNode.appendChild(new LinkGroup().getLinkGroup());
			}

		});

	}
}
