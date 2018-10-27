import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var elems = document.querySelectorAll(".sidenav");
		var instances = M.Sidenav.init(elems);
	}

}
