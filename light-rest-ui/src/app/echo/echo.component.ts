import { Component } from '@angular/core';
import { EchoService } from '../service/echo.service';
import { Datos } from './interface/datos';

@Component({
	selector: 'app-echo',
	templateUrl: './echo.component.html',
	styleUrls: ['./echo.component.scss']
})
export class EchoComponent {
	constructor(private readonly _echoService: EchoService) {
		this.onGetDate();
	}

	dato: string = '';

	dataList: Datos[] = [];

	aniadir() {
		const dato: Datos = {
			word: this.dato
		};
		this._echoService.create(dato).subscribe((res) => {
			this.dato = '';
			this.onGetDate();
		});
	}

	onGetDate() {
		this._echoService.get().subscribe((res: Datos[]) => {
			this.dataList = res;
		});
	}

	onDeleteDate(data: Datos) {
		const { id } = data;
		this._echoService.delete(id!).subscribe((res) => {
			console.log(res);
			this.onGetDate();
		});
	}
}
