'use strict';

import Block from '../block/block';
import GroupInfo from '../groupInfo/groupInfo';

export default class Content extends Block{
	constructor(){
		super('main');
		this.setGroups();
	}

	setGroups(){
		this.get().appendChild(new GroupInfo().get());
	}
}
