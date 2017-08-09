'use strict';

import Block from '../block/block';
import GroupInfo from '../groupInfo/groupInfo';

export default class Content extends Block{

	/**
	 * Content constructor
	 */
	constructor(){
		super('main');
		this.setGroups();
	}

	/**
	 * Adding topics to the DOM
	 */
	setGroups(){
		this.get().appendChild(new GroupInfo().get());
	}
}
