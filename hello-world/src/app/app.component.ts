import { Component } from '@angular/core';
import { LikeComponent } from './like.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	title = 'Hello Angularrrr';
}

let myLike = new LikeComponent(101, true);
myLike.onClick();
console.log(
	`likecount: ${myLike.likesCount}, isSelected: ${myLike.isSelected}`
);
