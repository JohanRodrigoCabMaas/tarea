import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoComponent } from './echo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: EchoComponent
	}
];

@NgModule({
	declarations: [EchoComponent],
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule]
})
export class EchoModule {}
