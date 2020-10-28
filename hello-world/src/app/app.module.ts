import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test.component';
import { TestService } from './test.service';
import { AuthorComponent } from './author.component';
import { AuthorService } from './author.service';
@NgModule({
	declarations: [AppComponent, TestComponent, AuthorComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [TestService, AuthorService],
	bootstrap: [AppComponent],
})
export class AppModule {}
