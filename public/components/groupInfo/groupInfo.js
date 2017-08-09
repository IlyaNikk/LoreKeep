'use strict';

import Block from '../block/block';
import LinkGroup from '../linkGroup/linkGroup';
import './groupInfo.css';

export default class GroupInfo extends Block {

	/**
	 * Topics constructor
	 */
	constructor() {
		super('section', {});
		this.get().classList.add('links-group');
		// let allStyles = document.styleSheets[0].cssRules;
		// Object.keys(allStyles).forEach( (rule, count) =>{
		// 	if(allStyles[rule].name === 'content_appear'){
		// 		this.animationPosition = count;
		// 	}
		// });
		// console.log(this.animationPosition);
		this.renderTopics();
	}

	/**
	 * Creating topics without more information about them
	 */
	renderTopics() {
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

	/**
	 * Setting event listeners on topic to appear more information
	 * @param divTopic - topic, on which we set listener
	 */
	listAppear(divTopic) {
		let triangle = new Block('span', {});
		triangle.get().classList.add('triangle-up');

		divTopic.get().addEventListener('click', () => {
			event.preventDefault();
			let array = document.body.getElementsByClassName('links-content');
			if (array.length > 0) {
				if (array[0].firstChild && array[0].firstChild.className.indexOf('links-group_appear') !== -1) {
					console.log(array[0]);
					setTimeout(() => {
						this.replaceList(array[0], divTopic, triangle);
					}, 1000);
				} else {
					this.replaceList(array[0],divTopic, triangle);
				}
			} else {
				divTopic.get().appendChild(triangle.get());
				this.get().parentNode.appendChild(new LinkGroup().get());
				console.log(new LinkGroup().get());
			}

		});

	}

	/**
	 * Replacing old list of links with new one
	 * @param oldList - old list of links
	 * @param divTopic - topic of links
	 * @param triangle - pointer to topic
	 */
	replaceList(oldList, divTopic, triangle){
		oldList.firstChild.classList.add('links-group_disappear');
		oldList.addEventListener('animationend', e => {
			let oldGroup = document.getElementsByClassName('links-content');
			oldGroup[0].parentNode.removeChild(oldGroup[0]);
			let oldTriangle = document.getElementsByClassName('triangle-up');
			oldTriangle[0].parentNode.removeChild(oldTriangle[0]);
			divTopic.get().appendChild(triangle.get());
			this.get().parentNode.appendChild(new LinkGroup().get());
		});
		setTimeout(() => {
			let columns = document.getElementsByClassName('content-column');
			for (let i = 0; i < columns.length; ++i) {
				columns[i].style.opacity = 0;
			}
		}, 500)
	}
}
