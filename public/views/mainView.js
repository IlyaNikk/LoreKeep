'use strict';

import MainBar from '../components/mainBar/mainBar';
import Content from '../components/content/content';

export default class MainView{

	/**
	 * Creating main page view
	 */
	constructor(){
		let bar = new MainBar();
		let content1 = new Content();
		let content2 = new Content();
		document.body.appendChild(bar.get());
		document.body.appendChild(content1.get());
		document.body.appendChild(content2.get());
	}

}
