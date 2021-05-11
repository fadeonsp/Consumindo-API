import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  [x: string]: any;

  url = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) { }

  httOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  // obter todos os carros
  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um carro
  saveCar(car: Car): Observable<Car>{
    return this.httpClient.post<Car>(this.url, JSON.stringify(car), this.httOptions)
      .pipe(retry(2),
      catchError(this.handleError))
  }
  //atualiza um carro
  updateCar(car: Car): Observable<Car>{
    return this.httpClient.put<Car>(this.url + '/' + car.id, JSON.stringify(car),
    this.httOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // deleta carro
  deleteCar(car: Car) {
    return this.httpClient.delete<Car>(this.url + '/' + car.id, this.httOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      // erro ocorreu no lado do client
      errorMessage = error.error.message;
    }else {
      // erro no lado do servidor
      errorMessage =  `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
