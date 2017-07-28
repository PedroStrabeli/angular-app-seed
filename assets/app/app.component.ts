import { Component } from '@angular/core'

@Component({
	selector: 'app',
	styles:        [
		require('./app.styl')
	],
	template: require('./app.pug')
	// templateUrl: './app.component.html',
	// styleUrls: ['./app.component.css']
})
export class AppComponent {

}