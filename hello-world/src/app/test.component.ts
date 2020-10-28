import { Component } from '@angular/core';

@Component({
	selector: 'test',
	template: `
		<h2>{{ getTitle() }}</h2>
		<ul>
			<li *ngFor="let course of courses">{{ course.toUpperCase() }}</li>
		</ul>
	`,
})
export class TestComponent {
	name = 'this is angular testing';
	courses = ['course One', 'course Two', 'course Three'];
	getTitle() {
		return this.name;
	}
}
