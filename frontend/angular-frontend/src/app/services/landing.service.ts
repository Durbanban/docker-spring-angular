import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TutorialResponse } from '../interfaces/tutorial.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  public getListadoTutorials(): Observable<TutorialResponse[]> {
    return this.http.get<TutorialResponse[]>('http://localhost:6868/api/tutorials');
  }
}
