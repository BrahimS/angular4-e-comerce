import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
	selector: 'test',
	template: `
		<h2>{{ title }}</h2>
		<ul>
			<li *ngFor="let course of courses">{{ course.toUpperCase() }}</li>
		</ul>
	`,
})
export class TestComponent {
	title = 'List of Courses';
	courses;

	constructor(service: TestService) {
		this.courses = service.getCourses();
	}
}
