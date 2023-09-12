import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { EchoComponent } from './echo/echo.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
	{
		path:'echo',
		loadChildren:()=>import('./echo/echo.module').then((m)=>m.EchoModule)
	}
]
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule,RouterModule.forRoot(routes),HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
