import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Datos } from '../echo/interface/datos';

@Injectable({ providedIn: 'root' })
export class EchoService {
	private readonly apiUrl = `http://localhost:3000/echo`;

	constructor(private readonly _httpClient: HttpClient) {}

	get(): Observable<Datos[]> {
		return this._httpClient.get<Datos[]>(`${this.apiUrl}`);
	}
	create(word: Datos): Observable<Datos> {
		return this._httpClient.post<Datos>(`${this.apiUrl}`, word);
	}
	update(id: string, date: Datos): Observable<Datos> {
		return this._httpClient.patch<Datos>(`${this.apiUrl}/${id}`, date);
	}

	delete(id: string): Observable<Datos> {
		return this._httpClient.delete<Datos>(`${this.apiUrl}/${id}`);
	}
}
