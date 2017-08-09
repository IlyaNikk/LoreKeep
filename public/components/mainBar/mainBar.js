'use strict';

import Block from '../block/block';
import './mainBar.css';

export default class MainBar extends Block{

	/**
	 * Main bar constructor
	 */
	constructor(){
		super('header', {});
		this.setElements();
	}

	/**
	 * Creating main bar
	 */
	setElements(){
		let headerTitle = new Block('h1');
		headerTitle.get().classList.add('header__title');
		headerTitle.get().innerHTML = 'LoreKeep';

		let form = new Block('form', {});

		let input = new Block('input',{
			type: 'search',
			name: 'search',
			placeholder: 'Enter key words'
		});
		input.get().classList.add('search-form__input');
		let button = new Block('button', {});
		button.get().innerHTML = 'Search';
		button.get().classList.add('search-form__button');
		form.get().appendChild(input.get());
		form.get().appendChild(button.get());
		
		this.get().appendChild(headerTitle.get());
		this.get().appendChild(form.get());
	}
}
